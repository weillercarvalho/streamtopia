FROM node:16.19.0

RUN npm config set cache /tmp --global

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=5000

EXPOSE 5000

RUN npx prisma generate

CMD ["npm", "start"]