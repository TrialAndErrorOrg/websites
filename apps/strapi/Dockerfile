FROM node:16.14.2
RUN curl -o- -L https://yarnpkg.com/install.sh | \
    bash -s --

RUN mkdir -p /usr/src/app
ENV PATH="/usr/local/bin:${PATH}"
ENV NODE_ENV=production
ADD . /usr/src/app/
EXPOSE 3000
WORKDIR /usr/src/app
