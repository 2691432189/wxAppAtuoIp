FROM node:20.17.0

WORKDIR /app

COPY . .

CMD ["npm", "install"]

CMD ["node", "index.js"]