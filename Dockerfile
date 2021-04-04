FROM node:4.3
COPY . /src
RUN cd /src && npm install
EXPOSE 8088
CMD ["node", "/src/server.js"]
