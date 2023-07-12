FROM node:16

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

# Build TypeScript code
RUN npm run build

EXPOSE 3000

# Start the application
CMD [ "npm", "start" ]