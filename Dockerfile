# Stage 1: The Baker
FROM node:20-alpine AS builder
WORKDIR /app
COPY . .

# ADD THE FLAG HERE to bypass the version conflict
RUN npm install --legacy-peer-deps

RUN npm run build

# Stage 2: The Waiter
FROM nginx:alpine
RUN rm -rf /usr/share/nginx/html/*
# Make sure your project build folder is named 'dist' (Vite's default)
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
