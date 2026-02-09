# Stage 1: The "Baker" (Node.js)
FROM node:20-alpine AS builder
WORKDIR /app
COPY . .
# Install dependencies and build the project
RUN npm install
RUN npm run build

# Stage 2: The "Waiter" (Nginx)
FROM nginx:alpine
RUN rm -rf /usr/share/nginx/html/*
# ONLY copy the 'Cake' (the dist folder) from the Baker stage
# Note: If your build folder is named 'build' instead of 'dist', change it below
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
