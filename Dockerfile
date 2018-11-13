# Create app directory
FROM node:carbon

# Install app dependencies
COPY package.json ./
RUN npm install

# Copy app source code
COPY . .

# Expose port and start application
EXPOSE 1337
CMD ["npm", "start"]
