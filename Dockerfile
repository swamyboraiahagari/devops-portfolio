FROM node:20-alpine
WORKDIR /app

# 1. Install pnpm
RUN npm install -g pnpm

# 2. Copy dependency files AND the patches folder
# This ensures pnpm can find the wouter patch file
COPY package.json pnpm-lock.yaml* ./
COPY patches ./patches 

# 3. Install dependencies
RUN pnpm install --no-frozen-lockfile

# 4. Copy everything else
COPY . .

# 5. Build the project
RUN pnpm run build

# 6. Expose the server port
EXPOSE 5000

# 7. Start the Full-Stack app
CMD ["pnpm", "start"]
