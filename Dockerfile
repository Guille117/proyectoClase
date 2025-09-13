FROM node:20-alpine
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
EXPOSE 4200
CMD ["ng", "serve", "--host", "0.0.0.0"]

#ejecutarlo esto cada vez que se cambien dependencias 
#docker-compose up --build

# y esto docker-compose up para encenderlo normalmente
