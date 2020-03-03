# Define Base Image

FROM telkomindonesia/alpine:nodejs-8.9.3

MAINTAINER Dimas Restu Hidayanto <dimas@playcourt.id>

# Set Working Directory Under Repository Directory
WORKDIR /usr/src/app

# Update Some Package
RUN apk add --update --no-cache --virtual .build-dev build-base python python-dev

# Copy all file inside repository to Working Directory
COPY . .

# install required package 
#   If your apps having bycypt please add this command before "&& apl del .build-dev"
#   > && npm rebuild bcrypt --build-from-source
RUN npm i -g npm \
    && npm i -g node-gyp \
    && npm i \
    && apk del .build-dev

# Expose Application Port

EXPOSE 9000

# Run Application
CMD ["npm", "start"]

