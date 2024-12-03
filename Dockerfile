# Folosește imaginea oficială de Node.js
FROM node:latest

# Instalează tini (manager de procese)
RUN apt-get update && apt-get install -y tini

# Setează directorul de lucru
WORKDIR /usr/src/proiectmap

# Copiază fișierele frontend și backend în container
COPY ./frontend /usr/src/proiectmap/frontend
COPY ./backend /usr/src/proiectmap/backend

# Setează permisiunile corespunzătoare pentru fișiere
RUN chown -R node:node /usr/src/proiectmap

# Instalează dependențele backend
WORKDIR /usr/src/proiectmap/backend
RUN npm install

# Instalează http-server pentru frontend
WORKDIR /usr/src/proiectmap/frontend
RUN npm install -g http-server

# Expune porturile necesare pentru frontend și backend
EXPOSE 8080 3000

# Rulează ambele servere: frontend și backend
CMD ["/usr/bin/tini", "--", "sh", "-c", "http-server ./frontend -p 8080 & node /usr/src/proiectmap/backend/server.js"]
