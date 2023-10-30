FROM mysql:latest

ARG ROOT_PASSWORD=ANSKk08aPEDbFjDO
ENV MYSQL_DATABASE=testing
ENV MYSQL_ROOT_PASSWORD=${ROOT_PASSWORD}

COPY ./setup.sql /docker-entrypoint-initdb.d/setup.sql

EXPOSE 3307

CMD ["mysqld"]