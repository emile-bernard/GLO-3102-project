# Document Design


## Comment lancer l’application

```bash
npm install
npm build && npm run start
```

## Comment voir chacune des pages

### Accès au site

Pour voir les pages, il faut d'abord s'inscrire. Le workflow est naturel depuis la page d'accueil de lien en lien.

### Note sur la recherche

Il faut utiliser la recherche pour trouver les artistes, albums, ou chansons à partir desquelles il sera possible de se construire une playlist. Cliquer sur les catégories dans le menu et lancer des recherches.

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
  - '/account': le compte de l'utilisateur courant, excepté s'il y a des get params dans l'URL où à ce moment c'est un autre utilisateur qui est visité depuis la recherche d'utilisateurs. La fonctionnalité Gravatar est faite sur la page user, il faut s'inscrire avec le même email sur gravatar.
  - '/settings': les paramètres.
  - '/logout': les settings.


#### Pour plus d'informations sur la navigation.

Pour plus d'informations, voir directement le router dans `index.js`. Le tout est supposé être intuitif.


### Fonctionnalitées au choix


#### Gravatar

Un gravatar est disponible dans la page account. Il faut s'inscrire sur gravatar pour qu'un gravatar s'affiche, correspondant au email de l'utilisateur se faisant consulter.

Pour faciliter la correction, un gravatar est déjà créé pour au moins un utilisateur dans UBeat. Il suffit de se login avec le email et password suivant, puis de naviguer vers la page d'account (l'icone en haut complètement à droite dans les menus du site):
- **email**: guillaume-chevalier@outlook.com
- **password**: guillaume


#### Music News page

Naviguez sous la page de nouvelles "News" depuis le menu du site pour voir les nouvelles sur la musique. Il est possible de choisir plusieurs tabs de nouvelles une fois rendu sur la page pour différents sujets. Les nouvelles se basent sur une API gratuite où nous nous sommes inscrits pour fetcher les nouvelles des derniers jours pour chaque sujets avec des mots clés.
