FROM node:latest

WORKDIR /client

COPY ./package.json package.json
COPY ./package-lock.json package-lock.json

COPY ./ ./

RUN ["npm", "install"]

CMD ["npm", "start"]

EXPOSE 3031

