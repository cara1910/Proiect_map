FROM node:latest
WORKDIR /usr/src/proiectmap

COPY ./frontend /usr/src/proiectmap/frontend
COPY ./backend /usr/src/proiectmap/backend

RUN chown -R node:node /usr/src/proiectmap

WORKDIR /usr/src/proiectmap/backend
RUN npm install

WORKDIR /usr/src/proiectmap/frontend
RUN npm install -g http-server
RUN http-server ./frontend -p 8080

EXPOSE 8080 3000

CMD ["sh", "-c", "http-server ./frontend -p 8080 & node ./backend/server.js"]