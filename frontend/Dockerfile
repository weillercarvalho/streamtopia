FROM node:16.19.0

# pasta para aonde vai o build
WORKDIR /app

COPY . .

RUN npm i --force

RUN npm run build

RUN mkdir -p /var/www/html
RUN mv build/* /var/www/html

WORKDIR /

RUN rm -rf /app