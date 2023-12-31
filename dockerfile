FROM mysql:8.0

VOLUME /tmp/mysql-data:/var/lib/mysql

ARG ROOT_PASSWORD=ANSKk08aPEDbFjDO
ENV MYSQL_DATABASE=testing
ENV MYSQL_ROOT_PASSWORD=${ROOT_PASSWORD}

EXPOSE 3307

CMD ["mysqld"]