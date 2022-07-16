FROM node:16-alpine

WORKDIR /server

COPY package.json .

RUN npm install

COPY . ./

ENV AUTH0_DOMAIN=EXAMPLE
ENV AUTH0_CLIENT_ID=EXAMPLE
ENV PORT=5000

EXPOSE ${PORT}

CMD ["npm", "run", "start:dev"]