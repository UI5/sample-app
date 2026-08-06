FROM node:22-alpine

WORKDIR /app

# Dependencies are installed inside the image. The source tree is mounted as a
# volume at runtime, and an anonymous volume shadows /app/node_modules so the
# host's macOS-built modules never overwrite the container's.
COPY package.json package-lock.json ./
RUN npm ci

COPY . .

EXPOSE 8080

# --accept-remote-connections binds ui5 serve on all interfaces (0.0.0.0)
# instead of localhost, so the port is reachable from the host.
CMD ["npm", "start", "--", "--accept-remote-connections"]
