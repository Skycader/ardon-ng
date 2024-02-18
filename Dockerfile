FROM node:lts-alpine as build-frontend-stage
WORKDIR /ardon-frontend
COPY package*.json /ardon-frontend/
RUN mkdir -p /etc/nginx/logs
RUN npm install
COPY . .
ARG configuration=prod
RUN npm run build


#FROM nginx
#ARG configuration=prod
## Должно совпадать с путем в nginx.conf
#COPY --from=build-frontend-stage /ardon-frontend/dist/ardon-ng/browser/ /usr/share/nginx/html
#COPY --from=build-frontend-stage /ardon-frontend/nginx.conf /etc/nginx/nginx.conf
#EXPOSE 4200 3000
