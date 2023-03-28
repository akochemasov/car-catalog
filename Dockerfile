FROM node:18-alpine AS build
WORKDIR /app
COPY . /app
RUN npm install
CMD ["sh", "-c", "yarn server & yarn build && yarn start"]
