FROM node:22-alpine

WORKDIR /app

COPY ./app/package.json ./app/package-lock.json ./

RUN npm install

EXPOSE 5173
CMD [ "npm", "run", "dev" ]