# Use an official Node.js runtime as the base image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the project files to the working directory
COPY . .

# Expose the desired port (e.g., 3000)
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "run", "dev"]
