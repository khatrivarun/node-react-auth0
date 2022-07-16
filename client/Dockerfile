FROM node:16.5.0-alpine

WORKDIR /client/app

COPY package.json .

RUN npm install

COPY . ./

ENV REACT_APP_AUTH0_DOMAIN=EXAMPLE
ENV REACT_APP_AUTH0_CLIENT_ID=EXAMPLE

EXPOSE 3000

CMD ["npm", "run", "start"]