FROM node:16

WORKDIR /app

COPY package.json .

RUN npm install -g npm@9.8.0

COPY . .

# Build TypeScript code
RUN npm update react --force
RUN npm run build


EXPOSE 3000

# Start the application
CMD [ "npm", "start" ]