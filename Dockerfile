FROM cypress/browsers:node-20.9.0-chrome-118.0.5993.88-1-ff-118.0.2-edge-118.0.2088.46-1


WORKDIR /e2e

COPY package.json package-lock.json ./

RUN npm install

COPY . .

CMD ["npx", "cypress", "run", "--browser", "firefox", "--spec", "cypress/e2e/work2/**/*.cy.js"]