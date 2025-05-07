#Stage 1 Build Mode
FROM node:current-alpine3.20 as builder

#Workdir
WORKDIR /app

#Copy Package Json
COPY package*.json ./

#Install Dependecies
RUN npm install

# 