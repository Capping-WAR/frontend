FROM node:10-slim
MAINTAINER Daniel Gisolfi

# Update the enviorment
RUN apt-get update -y

WORKDIR /war
COPY ./public ./public
COPY ./src ./src
COPY index.js .
COPY package.json .

EXPOSE 3000
RUN npm install \
    && npm run build \
    && find /war/build/index.html -type f -exec sed -i 's/src="\//src="\/war\//g' {} \; \
    && find /war/build/index.html -type f -exec sed -i 's/href="\//href="\/war\//g' {} \;
CMD npm run serve
