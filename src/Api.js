/* eslint-disable import/prefer-default-export */
const baseURL = 'http://ubeat.herokuapp.com';
const unsecureBaseURL = 'http://ubeat.herokuapp.com/unsecure';

//-------------------------------------------------------------
// Se connecter/déconnecter
//-------------------------------------------------------------
// POST /login
// GET /logout


//-------------------------------------------------------------
// Enregistrer un nouvel utilisateur
//-------------------------------------------------------------
// POST /signup


//-------------------------------------------------------------
// Token info
//-------------------------------------------------------------
// GET /tokenInfo


//-------------------------------------------------------------
// Recherche
// GET /search
// GET /search/albums
// GET /search/artists
// GET /search/tracks


//-------------------------------------------------------------
// Utilisateurs
//-------------------------------------------------------------
// GET /users
// GET /users/:id
// GET /search/users
// POST /follow
// DELETE /follow/:id


//-------------------------------------------------------------
// Album
//-------------------------------------------------------------
// GET /albums/:id
export const getAlbum = (albumId, unsecured) => {
  let URL = baseURL;
  if (unsecured) URL = unsecureBaseURL;
  return fetch(`${URL}/albums/${albumId}`, {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credential': 'true'
    } })
    .then(response => response.json())
    .then(json => json.tasks)
    .catch(() => {
      window.console.error('unable to fetch tasks');
    });
};

// GET /albums/:id/tracks
export const getAlbumTracks = (albumId, unsecured) => {
  let URL = baseURL;
  if (unsecured) URL = unsecureBaseURL;
  return fetch(`${URL}/albums/${albumId}/tracks`, {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credential': 'true'
    } })
    .then(response => response.json())
    .then(json => json.tasks)
    .catch(() => {
      window.console.error('unable to fetch tasks');
    });
};
//-------------------------------------------------------------
// Artiste
//-------------------------------------------------------------
// GET /artists/:id
// GET /artists/:id/albums


//-------------------------------------------------------------
// Listes de lectures
//-------------------------------------------------------------
// GET /playlists
// GET /playlists/:id
// POST /playlists
// PUT /playlists/:id
// POST /playlists/:id/tracks
// DELETE /playlists/:playlistId/tracks/:trackId

