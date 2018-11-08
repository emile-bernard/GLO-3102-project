/* eslint-disable import/prefer-default-export */
const baseURL = 'http://ubeat.herokuapp.com';
const unsecureBaseURL = 'http://ubeat.herokuapp.com/unsecure';

function FormatStringForSearch(stringToFormat) {
  const string = String(stringToFormat);
  const array = string.split(' ');
  const arraySize = array.length;
  let wordProcessed = 0;
  let finalSring = '';
  array.forEach((word) => {
    wordProcessed += 1;
    if (wordProcessed !== arraySize) {
      finalSring = `${finalSring + word}%20`;
    }
  });
  return finalSring;
}


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
//-------------------------------------------------------------
// GET /search
export const generalSearch = (q, unsecured, limit = 20) => {
  let URL = baseURL;
  if (unsecured) URL = unsecureBaseURL;
  return fetch(`${URL}/search?q=/${q}&limit=${limit}`, {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credential': 'true'
    } })
    .then(response => response.json())
    .catch(() => {
      window.console.error('Unable to fetch general search.');
    });
};
// GET /search/albums
export const albumSearch = (q, unsecured, limit = 20) => {
  let URL = baseURL;
  if (unsecured) URL = unsecureBaseURL;
  const searchStringFormated = FormatStringForSearch(q);
  return fetch(`${URL}/search/album?q=/${searchStringFormated}&limit=${limit}`, {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credential': 'true'
    } })
    .then(response => response.json())
    .catch(() => {
      window.console.error('Unable to fetch album general search.');
    });
};
// GET /search/artists
export const artistSearch = (q, unsecured, limit = 20) => {
  let URL = baseURL;
  if (unsecured) URL = unsecureBaseURL;
// eslint-disable-next-line max-len
  const searchStringFormated = FormatStringForSearch(q); // ici je me suis dis que le formatage est probablement pareil mais à essayer  comme le serveur semble down en ce moment
  return fetch(`${URL}/search/artists?q=/${searchStringFormated}&limit=${limit}`, {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credential': 'true'
    } })
    .then(response => response.json())
    .catch(() => {
      window.console.error('Unable to fetch artist general search.');
    });
};
// GET /search/tracks
export const trackSearch = (q, unsecured, limit = 20) => {
  let URL = baseURL;
  if (unsecured) URL = unsecureBaseURL;
  const searchStringFormated = FormatStringForSearch(q);
  return fetch(`${URL}/search/tracks?q=/${searchStringFormated}&limit=${limit}`, {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credential': 'true'
    } })
    .then(response => response.json())
    .catch(() => {
      window.console.error('Unable to fetch track general search.');
    });
};

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
    .catch(() => {
      window.console.error('Unable to fetch an album.');
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
    .catch(() => {
      window.console.error('Unable to fetch album tracks list.');
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

