FROM node:11.5.0

WORKDIR /app
ADD . /app
EXPOSE 8000

RUN npm install
RUN npm run build

RUN rm -rf /app/src
RUN rm -rf /app/public

CMD npm run prod