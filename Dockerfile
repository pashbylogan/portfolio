FROM node:latest AS build
WORKDIR /build

COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm ci

COPY public/ public
COPY src/ src
RUN npm run build

FROM httpd:alpine
ENV NODE_OPTIONS=--max-old-space-size=4096
ENV REACT_APP_API_KEY=mHrzvi2MgYesVTNAeNM6Wk6UUQvJX3HWekiAqduoXIpIaPE1JyQj5Y4F2dqXsakLuXiHVFfVIr1ogAR32pyZsb4908X1K8A995NBSIv6sh8B0vABrs08O3otqdtL2KNb
ENV REACT_APP_EMAIL_SERVICE_ID=service_pf7qlke
ENV REACT_APP_EMAIL_TEMPLATE_ID=template_pjjhpdc
ENV REACT_APP_EMAIL_USER_ID=user_WASwHVx6EM1qbwJortNUF
WORKDIR /var/www/html
COPY --from=build /build/build/ .
