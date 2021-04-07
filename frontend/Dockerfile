##
# Copyright (c) 2020 Musa Ugurlu
# Author: Musa Ugurlu
# Date: 09/20/2020 12:57:13 am
##
# build stage
FROM node:lts-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/build /usr/share/nginx/html
COPY ./docker/nginx.conf /app/nginx.conf
RUN envsubst /app < /app/nginx.conf > /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]