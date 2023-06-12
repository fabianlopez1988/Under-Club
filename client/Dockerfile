FROM node:latest

ENV REACT_APP_URL_API_PRODUCTION=$REACT_APP_URL_API_PRODUCTION

WORKDIR /client

COPY ./package.json package.json
COPY ./package-lock.json package-lock.json

COPY ./ ./

RUN ["npm", "install"]

CMD ["npm", "start"]

EXPOSE 3031

