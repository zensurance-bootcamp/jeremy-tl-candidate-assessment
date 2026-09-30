#!/usr/bin/env bash
set -e

gh codespace ports visibility 3000:public -c "$CODESPACE_NAME" || true

# Restart Docker to ensure containerd socket is created properly
echo "Restarting Docker service..."
sudo pkill containerd 2>/dev/null || true
sudo pkill dockerd 2>/dev/null || true
sleep 2
sudo dockerd --dns 168.63.129.16 > /tmp/docker.log 2>&1 &
sleep 5

# Wait for Docker daemon to be ready
echo "Waiting for Docker daemon to start..."
for i in {1..60}; do
  if docker info >/dev/null 2>&1; then
    echo "Docker daemon is ready!"
    break
  fi
  [ $i -eq 60 ] && { echo "Docker daemon failed to start"; exit 1; }
  sleep 2
done

# Wait for containerd to be ready by testing container operations
echo "Waiting for containerd to be ready..."
for i in {1..30}; do
  if docker run --rm hello-world >/dev/null 2>&1; then
    echo "Containerd is ready!"
    break
  fi
  [ $i -eq 30 ] && echo "Containerd not ready, attempting to start services anyway..."
  sleep 3
done

docker compose -f docker/docker-compose.yml up --build
