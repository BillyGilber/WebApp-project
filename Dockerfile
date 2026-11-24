
# Use Node.js as the base image
FROM node:20

# Set the working directory
WORKDIR /app

# Copy package.json
COPY package.json .

# Copy application files
COPY server.js .

# Expose application port
EXPOSE 3000

# Start the Node.js application
CMD ["npm", "start"]
