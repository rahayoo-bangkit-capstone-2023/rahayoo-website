# Base image
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci --only=production

# Copy the rest of the app files to the working directory
COPY . .

# Build the Next.js app
RUN npm run build
# Expose the port that the app will listen on
EXPOSE 8080

# Start the Next.js app
CMD ["npm", "start"]
