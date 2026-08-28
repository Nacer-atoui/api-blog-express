# Utiliser une image Node.js légère
FROM node:lts-alpine

# Définir le dossier de travail dans le conteneur
WORKDIR /app

# Copier les fichiers de dépendances
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste du code de l'API
COPY . .

# Exposer le port interne de ton API (généralement 3000 ou 8080)
EXPOSE 3000

# Commande pour démarrer ton serveur
CMD ["npm", "start"] 