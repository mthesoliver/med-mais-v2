# Start your image with a node base image
FROM node:18-alpine

RUN mkdir -p /app
# The /app directory should act as the main application directory
WORKDIR /app

ADD package.json /app 
# Copy local directories to the current local directory of our docker image (/app)
COPY . .

# Install node packages, install serve, build the app, and remove dependencies at the end
RUN npm install 
RUN npm run build

# Start the app using serve command
# CMD [ "npm", "start" ]
