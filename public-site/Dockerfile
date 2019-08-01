FROM node:12.7.0-alpine

WORKDIR /usr/app

# Install Dependencies
COPY ./package.json ./package-lock.json ./
RUN npm i --silent

# Copy the app code
COPY . .

# Expose Ports
EXPOSE 8000

# Default Command - This is never used
CMD ["npm", "run", "start"]
