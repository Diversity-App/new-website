FROM node:16-alpine
WORKDIR /app
ENV NODE_ENV production
COPY /next.config.js ./
COPY  /public ./public
COPY /package.json ./package.json
COPY /.next/standalone ./
COPY /.next/static ./.next/static
EXPOSE 7575
ENV PORT 7575
CMD ["node", "server.js"]
