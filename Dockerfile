FROM node:8.15.0-alpine as build

# Set the work directory
RUN mkdir /app
WORKDIR /app

# Add package.json and install *before* adding application files
COPY package*.json /app
RUN npm install

# Bundle app source
COPY . /app

#Expose the port
ENV SERVER_PORT 3000
EXPOSE 3000

# Add commands
CMD npm start
