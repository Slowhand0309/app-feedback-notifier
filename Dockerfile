FROM node:20.10.0-alpine

RUN apk update && \
    apk add --no-cache git=~2.40 bash=~5.2

RUN yarn global add @google/clasp@^2.4.2