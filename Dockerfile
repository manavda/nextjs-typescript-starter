FROM node:latest

COPY . .

RUN npm i --legacy-peer-deps && npm run build && npm prune --production

EXPOSE 3000
ENV NODE_ENV=production

USER node

CMD ["npm", "start"]