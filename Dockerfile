FROM cypress/browsers:node12.19.0-chrome86-ff82

WORKDIR /app

COPY ./package*.json ./
RUN npm i 

COPY . .

ENTRYPOINT ["npm", "run", "test_ca"]