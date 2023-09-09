FROM node:18-alpine

WORKDIR /react-vite-app

COPY package.json package-lock.json ./

RUN npm install --silent

COPY . ./

CMD ["npm", "run", "dev"]

#docker build -t reac-vite-app .
#docker run -p 5173:5173 --name  reactApp reac-vite-app