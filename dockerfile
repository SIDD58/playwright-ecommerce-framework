FROM mcr.microsoft.com/playwright:v1.58.2-noble
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npx playwright install --with-deps
CMD ["npx", "playwright", "test"]

