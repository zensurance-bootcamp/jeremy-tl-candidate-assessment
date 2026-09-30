# Orders Inventory Server

A NestJS-based backend service that manages product inventory and order processing. This server provides both REST API endpoints and gRPC microservices for handling inventory management and order placement.

## Features

- **Product Management**: Track product stock levels with real-time inventory updates
- **Order Processing**: Handle order placement with automatic stock validation and adjustment
- **gRPC Microservices**: High-performance inter-service communication for inventory and order operations
- **Database Integration**: PostgreSQL database with TypeORM for data persistence
- **CORS Enabled**: Configured to work with the client application

## API Endpoints

- Inventory management (stock checking and adjustment)
- Order placement and tracking
- Product information retrieval

## Technology Stack

- **Framework**: NestJS
- **Database**: PostgreSQL with TypeORM
- **Communication**: REST API + gRPC microservices
- **Language**: TypeScript
