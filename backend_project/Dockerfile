# Use a lightweight Node.js 18 base image for building
FROM node:18-alpine as builder

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy the rest of the application files to the working directory
COPY . .

# Use a smaller final image
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy files from the builder stage
COPY --from=builder /app .

# Expose the port your backend listens on (e.g., 3000)
EXPOSE 5000

# Command to run your backend server
CMD ["npm", "start"]




















