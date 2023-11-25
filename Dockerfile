FROM node:20.10.0-alpine

RUN apk update && \
    apk add --no-cache bash=~5.2

RUN yarn global add @google/clasp@^2.4.2