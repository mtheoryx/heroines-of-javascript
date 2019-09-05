#
# Create the installation layer
FROM node:12.7.0-alpine as install

WORKDIR /usr/app

# Install Dependencies
COPY ./package.json ./package-lock.json ./
RUN npm i --silent

#
# Create the application development layer
FROM node:12.7.0-alpine as develop

# Expose Ports
EXPOSE 8000

# Create and change into a directory in the container
WORKDIR /usr/app

COPY --from=install /usr/app/. .

COPY . .

#
# @TODO: Create the testing layer
# A container build should fail here if tests fail
# RUN npm test or static analysis, linting, whatever

#
# @TODO: Create the production build layer
# This should only result in production npm deps installed
FROM node:12.7.0-alpine as production

WORKDIR /usr/app
# Install prod deps
COPY ./package.json ./package-lock.json ./
RUN npm i --production --silent
# Copy code from... somewhere
COPY . .
# Run a gatsby build production
RUN npm run build
# Should just be static files (HTML, JS, CSS, Media assets)
# For later copying

#
# Create the file serving layer (scratch image)
# This should end up with only static files in a file system
# With no actual operating system or binaries

FROM scratch

WORKDIR /build

COPY --from=production /usr/app/public .
# We now should have a directory called public
# With only static files (HTML, JS, CSS, Media assets)

# Default Command - This is never used
CMD [""]
