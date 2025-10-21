# Use official Node LTS image
FROM node:22-alpine AS deps

WORKDIR /usr/src/app

# Install binaries for native deps if needed
RUN apk add --no-cache libc6-compat

# Copy package manifests
COPY package.json pnpm-lock.yaml* ./

# Install pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# Install dependencies
RUN pnpm install --frozen-lockfile

# Build stage
FROM node:22-alpine AS builder
WORKDIR /usr/src/app

# Copy files
COPY . .

# Use same pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# Build the Next app
# Copy dependencies installed in the deps stage so the builder can run the build
COPY --from=deps /usr/src/app/node_modules ./node_modules

# Ensure pnpm is available and run the build
RUN corepack enable && corepack prepare pnpm@latest --activate && pnpm build

# Production image
FROM node:22-alpine AS runner
WORKDIR /usr/src/app
ENV NODE_ENV=production

# Copy only necessary files from builder
COPY --from=builder /usr/src/app/public ./public
COPY --from=builder /usr/src/app/.next ./.next
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/package.json ./package.json

# Ensure corepack/pnpm are available at runtime for 'pnpm' commands
RUN corepack enable && corepack prepare pnpm@latest --activate

# Expose the Next.js default port
EXPOSE 3000

# Start the app
CMD ["pnpm", "start"]
