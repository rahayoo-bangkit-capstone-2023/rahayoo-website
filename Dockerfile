# Base image
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json ./

# Install dependencies
RUN npm i --only=production

# Copy the rest of the app files to the working directory
COPY . .

# Build the Next.js app
RUN npm run build

# Expose the desired port (replace 3000 with the appropriate port if needed)
EXPOSE 8080

# Start the Next.js app
CMD ["npm", "start"]
