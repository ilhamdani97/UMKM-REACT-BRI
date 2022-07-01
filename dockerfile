#node version recomended alpine low
FROM node:12.18.3-alpine3.9 AS builder-bri

#create dir
WORKDIR /www.umkm.bri.co.id
#copy the react app to the container
COPY . .

#install react app
RUN npm install
RUN npm run build

#setup nginx
FROM nginx:alpine
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder-bri /www.umkm.bri.co.id/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

# Production environment
# FROM node:12.18.3
# RUN npm i -g serve
# WORKDIR /frontend
# COPY --from=builder /frontend/build .
# # EXPOSE 3000
# # CMD ["npm", "start"]
# CMD ["serve", "-p","82","-s","."]
