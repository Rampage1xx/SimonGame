FROM: node:latest

ENV PORT=3000

RUN mkdir -p /var/www/dist/

COPY ./dist/ /var/www/dist/
COPY ./server.js /var/www/

EXPOSE $PORT

CMD ["node", "server.js"]