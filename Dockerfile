# docker build -t investmentascode-assetservices .

# Use an official Node.js runtime as a parent image
FROM node:20

# Create app directory
WORKDIR /app

# Copy the package.json and package-lock.json files to /app 
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to /app
COPY . /app

# Expose port 8002
EXPOSE 3000

# Start the server
CMD ["npm","start"]