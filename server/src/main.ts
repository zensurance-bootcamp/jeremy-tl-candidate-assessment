import "reflect-metadata";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { Transport, MicroserviceOptions } from "@nestjs/microservices";
import { join } from "path";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 3000;

  // Enable CORS - dynamic origins for local and cloud development environments
  const allowedOrigins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
    // CodeSpaces patterns - more comprehensive
    /^https:\/\/.*\.preview\.app\.github\.dev$/,
    /^https:\/\/.*-5173\.app\.github\.dev$/,
    /^https:\/\/.*\.app\.github\.dev$/,
  ];

  app.enableCors({
    origin: (origin: string | undefined, callback: (err: Error | null, allow?: boolean) => void) => {
      // Allow requests with no origin (like mobile apps or Postman)
      if (!origin) {
        console.log('CORS: Allowing request with no origin');
        return callback(null, true);
      }
      
      // Check if origin matches allowed patterns
      const isAllowed = allowedOrigins.some(allowedOrigin => {
        if (typeof allowedOrigin === 'string') {
          return allowedOrigin === origin;
        }
        return allowedOrigin.test(origin);
      });
      
      console.log(`CORS: Origin ${origin} is ${isAllowed ? 'allowed' : 'blocked'}`);
      callback(null, isAllowed);
    },
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  });

  // gRPC microservice (inventory)
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.GRPC,
    options: {
      package: ["inventory", "orders"],
      protoPath: [
        join(process.cwd(), "src", "grpc", "inventory.proto"),
        join(process.cwd(), "src", "grpc", "orders.proto"),
      ],
      url: `0.0.0.0:50051`,
    },
  });

  await app.startAllMicroservices();
  await app.listen(port as number);
  // eslint-disable-next-line no-console
  console.log(`HTTP server listening on ${port}`);
}
bootstrap();
