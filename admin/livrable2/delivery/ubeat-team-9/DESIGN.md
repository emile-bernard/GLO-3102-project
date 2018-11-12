# Document Design


## Comment lancer l’application

```bash
npm install
npm build && npm run start
```


## Comment voir chacune des pages

### Note sur la recherche

Il faut utiliser la recherche pour trouver les artistes, albums, ou chansons à partir desquelles il sera possible de se construire une playlist. Cliquer sur les catégories dans le menu et lancer des recherches. 

Nous avons pris de l'avance sur les fonctionnalitées de recherche, ce qui facilitera la tâche du correcteur. 

**Note**: faire "enter" dans les barres de recherche ne fonctionne pas. Il faut cliquer le boutton juste à droite de la barre.


### Pages

La navigation dans le site web est intuitive. 

  - '/': home de l'application.
  - '/search': page de résultat de recherche de la barre du menu. Les résultats de recherche des recherches avancées (par catégories) se trouvent plutôt à leurs endroits respectifs (ex: sous /artists directement). Les résultats de recherche sont cliquables, et il sera possible d'interagir avec les playlists une fois rendu dans un album précis suite à plus de clicks si un résultat est un artiste.
  - '/artists': recherche par artiste
  - '/artists/:id': un artiste. Cliquer sur une pochette d'album pour accéder à l'album.
  - '/albums': recherche d'album. Cliquer sur l'album pour le consulter. 
  - '/albums/:id': un album. Il est possible d'ajouter les chansons à une playlist avec les liens correspondants à chaque album.
  - '/tracks': recherche par track. Cliquer sur la track nous ramènent à la page de l'album qui contient la track. 
  - '/playlists': voir les playlists. Possibilité de les éditer avec les boutons. 
  - '/playlists/:id': une playlist et la liste de chansons. Possibilité de supprimer une chanson. 
  - '/users': recherche d'user.
  - '/account': le compte.
  - '/settings': les paramètres.
  - '/logout': les settings.

Pour plus d'informations, voir directement le router dans `index.js`.
