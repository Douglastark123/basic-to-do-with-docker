FROM node:14-alpine

WORKDIR /app

COPY package.json .
COPY package-lock.json .

COPY /dist .

RUN npm i

EXPOSE 5173

CMD ["npm", "start"]
