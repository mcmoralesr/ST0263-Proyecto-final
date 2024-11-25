# Frontend Dockerfile
FROM node:16 as build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# Serve with Nginx
FROM nginx:1.27.2
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
