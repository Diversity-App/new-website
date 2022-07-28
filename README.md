## Diversity website

### Technologies utilisés :
#### [NextJS](https://nextjs.org/) Framework React pour faire tourner une application web
#### [React](https://reactjs.org/) Framework javascript
#### [Mantine](https://mantine.dev/) Librairie de composants React utilisés pour faire le site
Note : Il faut mettre à jour mantine vers la v5.0.0

### Installation
#### Yarn :
```
yarn install
``` 
Pour installer tout les paquets et les dépendances
```
yarn dev
```
Pour lancer le serveur de dev. en localhost:3000
#### Docker : 
```
docker build . -t diversity-app/website
```

Pour build le container docker

```
docker run -p 3000:3000 diversity-app/website
```
Pour lancer le container docker


### Verifier le build / formatter le code
```
yarn prettier:check
yarn lint
``` 
Pour vérifier la qualité du code.
Pensez à faire un ``yarn prettier:write`` pour formatter le code.



### La CI / CD
#### Docker
Quand un commit est push sur la branch main (branch par défaut), le container est build par la CI GitHub Actions et ensuite direcement poussé sur le repertoire de conteneurs GitHub
[documentation github](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry)  

*IL FAUT METTRE A JOUR LE CONTENEUR SUR LA MACHINE VIRTUELLE*  
Càd se connecter dessus, (``ssh diversity``)  
Faire : ``docker pull ghcr.io/diversity-app/new-website:latest``  
Ensuite: ``docker stop website``, ``docker rm website``  
Puis pour recreer le conteneur : ``docker run --name website --restart=always -d -p 7575:7575 ghcr.io/diversity-app/new-website:latest``

Sinon, utiliser l'interface portainer.

### Ouverture a internet 
Pour que le site soit dispo via diversity-app.fr, il faut faire en sorte que le port `7575`   soit exposee dans le Tunnel Cloudflare. L'ip de l'adaptateur réseau docker0 est : `172.17.0.1`  
Donc il faut que l'IP exposée dans le Tunnel Cloudflare soit : `172.17.0.1:7575`  

### Services tierces
#### Pour se connecter a un service tierce
L'email est celui de Diversity. Le mot de passe suit le schema décrit dans le channel #infos (message épinglé)
#### Formspree
Formspreee est utilisé pour le formulaire de contact. Les messages sont envoyés sur discord directement
#### Mailchimp
Mailchimp est utilisé pour l'inscription à la newsletter. Les inscriptions sont envoyées sur discord directement