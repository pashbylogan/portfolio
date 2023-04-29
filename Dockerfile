# syntax = docker/dockerfile:1.2

FROM node:latest AS build
ENV NODE_ENV production
WORKDIR /app

# Set environment variables
ARG NODE_OPTIONS_ARG
ENV NODE_OPTIONS=$NODE_OPTIONS_ARG

ARG REACT_APP_API_KEY_ARG
ENV REACT_APP_API_KEY=$REACT_APP_API_KEY_ARG

ARG REACT_APP_EMAIL_SERVICE_ID_ARG
ENV REACT_APP_EMAIL_SERVICE_ID=$REACT_APP_EMAIL_SERVICE_ID_ARG

ARG REACT_APP_EMAIL_TEMPLATE_ID_ARG
ENV REACT_APP_EMAIL_TEMPLATE_ID=$REACT_APP_EMAIL_TEMPLATE_ID_ARG

ARG REACT_APP_EMAIL_USER_ID_ARG
ENV REACT_APP_EMAIL_USER_ID=$REACT_APP_EMAIL_USER_ID_ARG

COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm ci

COPY public/ public
COPY src/ src
RUN --mount=type=secret,id=_env,dst=/etc/secrets/.env cat /etc/secrets/.env npm run build

# Create production environment
FROM nginx:alpine as production
ENV NODE_ENV=production

# Copy the built app from previous stage
COPY --from=build /app/build /usr/share/nginx/html
# Add your nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose the port to access the app
RUN chown -R nginx:nginx /usr/share/nginx/html
RUN chmod -R 755 /usr/share/nginx/html
EXPOSE 80

# Start the app
CMD ["nginx", "-g", "daemon off;"]
