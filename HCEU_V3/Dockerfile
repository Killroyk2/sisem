FROM node:latest

# Create app directory
WORKDIR /usr

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install pm2 -g

# Show current folder structure in logs
RUN ls -al -R

# Bundle app source
COPY . .

EXPOSE 3082

CMD [ "npm", "start" ]