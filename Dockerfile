FROM node:latest

COPY src/ .
RUN npm ci
USER node
CMD ["node", "index.js"]
