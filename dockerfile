FROM node:18 as base

FROM base as development
WORKDIR /ProjectCar
COPY package.json /ProjectCar
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm","start"]

FROM base as production
WORKDIR /ProjectCar
COPY package.json /ProjectCar
RUN npm install --only=production
COPY . .
EXPOSE 3000
CMD ["npm","run","start:prod"]

