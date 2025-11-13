FROM node:latest
WORKDIR .
COPY . .
EXPOSE 5000
RUN npm install
RUN npm install express@4
RUN npm install socket.io
CMD node server.ts

