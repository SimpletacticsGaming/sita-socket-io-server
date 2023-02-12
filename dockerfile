FROM node:latest
WORKDIR .
COPY . .
RUN npm install
RUN npm install express@4
RUN npm install socket.io
CMD node server.ts

