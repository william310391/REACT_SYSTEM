FROM node:18-alpine

WORKDIR /react-vite-app

COPY package.json package-lock.json ./

RUN npm install --silent

COPY . ./

CMD ["npm", "run", "dev"]

#GITHUB BACKEND: https://github.com/william310391/API_JWT_JAVA_v2.git

#docker build -t reac-vite-app .
#docker run -p 5173:5173 --name  reactApp reac-vite-app
