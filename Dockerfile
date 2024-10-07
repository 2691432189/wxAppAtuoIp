FROM node:20.17.0

WORKDIR /app

COPY . .

RUN npm install

CMD ["node", "index.js"]