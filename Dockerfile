# Folosește imaginea oficială de Node.js
FROM node:latest

# Instalează Tini
RUN apt-get update && apt-get install -y tini

# Setează directorul de lucru pentru aplicație
WORKDIR /usr/src/proiectmap

# Copiază fișierele frontend
COPY ./frontend /usr/src/proiectmap/frontend

# Copiază fișierele backend
COPY ./backend /usr/src/proiectmap/backend

# Instalează dependențele backend
WORKDIR /usr/src/proiectmap/backend
RUN npm install

# Instalează dependințele frontend
WORKDIR /usr/src/proiectmap/frontend
RUN npm install -g http-server

# Expune portul 8080 (frontend + backend)
EXPOSE 8080

# Folosește Tini pentru a rula serverul Node.js
ENTRYPOINT ["/usr/bin/tini", "--"]

# Rulează aplicația (frontend și backend pe același port)
CMD ["node", "/usr/src/proiectmap/backend/server.js"]
