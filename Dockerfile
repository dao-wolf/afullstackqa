FROM node:8-slim
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
ENTRYPOINT ["npm", "run", "start"]
EXPOSE 80
