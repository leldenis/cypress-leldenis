FROM cypress/browsers:node14.16.0-chrome89-ff86

WORKDIR /e2e

COPY package.json package-lock.json ./

RUN npm install

COPY . .

CMD ["npx", "cypress", "run", "--browser", "firefox", "--spec", "cypress/e2e/work2/**/*.cy.js"]