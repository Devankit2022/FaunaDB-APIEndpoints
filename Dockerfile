FROM node:18.16.0-slim
WORKDIR /app
COPY . /app
RUN npm install --production
ENV FAUNA_SECRET_KEY=DEFAULT_VALUE
EXPOSE 3000
CMD npm start