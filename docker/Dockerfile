FROM mhart/alpine-node:11

RUN apk add --no-cache bash gawk sed grep bc coreutils
RUN apk --update add git openssh && \
    rm -rf /var/lib/apt/lists/* && \
    rm /var/cache/apk/*

COPY . /srv

WORKDIR /srv

RUN npm i --only=production

CMD [ "/bin/sh", "-c", "node ." ]
