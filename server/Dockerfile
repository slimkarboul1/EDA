# Specify base image
FROM node:14

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json files to working directory
COPY package*.json ./

# Install app dependencies
RUN yarn

# Copy the rest of the application code to the working directory
COPY . .

# Expose port 5000
EXPOSE 5000

# Start the application
CMD [ "yarn", "start" ]