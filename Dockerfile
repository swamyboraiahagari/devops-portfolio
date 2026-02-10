FROM node:20-alpine
WORKDIR /app

# 1. Install pnpm (since your project uses it)
RUN npm install -g pnpm

# 2. Copy dependency files
COPY package.json pnpm-lock.yaml* ./

# 3. Install dependencies
RUN pnpm install --no-frozen-lockfile

# 4. Copy the rest of the code
COPY . .

# 5. Build the project
RUN pnpm run build

# 6. Expose the port (Your server likely runs on 5000 or 3000, 
# but we will map it to 80 in the docker run command)
EXPOSE 5000

# 7. Start the Node.js server
CMD ["pnpm", "start"]
