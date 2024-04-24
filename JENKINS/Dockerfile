FROM centos
WORKDIR /app
COPY package.json /app
RUN yum install openssh openssh-server
COPY . /app
EXPOSE 80
CMD [ "node","server.js" ]
