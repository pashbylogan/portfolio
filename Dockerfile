FROM node:latest AS build
ENV NODE_ENV production
WORKDIR /app

COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm ci

COPY public/ public
COPY src/ src
RUN npm run build

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

# Set environment variables
ENV NODE_OPTIONS=--max-old-space-size=4096
ENV REACT_APP_API_KEY=""
ENV REACT_APP_EMAIL_SERVICE_ID=""
ENV REACT_APP_EMAIL_TEMPLATE_ID=""
ENV REACT_APP_EMAIL_USER_ID=""

# Start the app
CMD ["nginx", "-g", "daemon off;"]
