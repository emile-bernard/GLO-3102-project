/* eslint-disable import/prefer-default-export */
import { getLoginToken } from './LoginCookies';

const baseURL = 'https://ubeat.herokuapp.com';
const unsecureBaseURL = 'https://ubeat.herokuapp.com/unsecure';


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

function GetCORSAllowedHeader(token) {
  return {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credential': 'true',
    Authorization: token
  };
}

function FormatAndLogErrorMessage(message, originalError) {
  window.console.error(message.toString() + originalError.toString());
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
  const token = getLoginToken();
  return fetch(`${URL}/search?q=/${q}&limit=${limit}`, {
    headers: GetCORSAllowedHeader(token), })
    .then(response => response.json())
    .catch((error) => {
      FormatAndLogErrorMessage('Unable to fetch general search.', error);
    });
};
// GET /search/albums
export const albumSearch = (q, unsecured, limit = 20) => {
  let URL = baseURL;
  if (unsecured) URL = unsecureBaseURL;
  const token = getLoginToken();
  const searchStringFormated = FormatStringForSearch(q);
  return fetch(`${URL}/search/album?q=/${searchStringFormated}&limit=${limit}`, {
    headers: GetCORSAllowedHeader(token), })
    .then(response => response.json())
    .catch((error) => {
      FormatAndLogErrorMessage('Unable to fetch album general search. Original error: ', error);
    });
};
// GET /search/artists
export const artistSearch = (q, unsecured, limit = 20) => {
  let URL = baseURL;
  if (unsecured) URL = unsecureBaseURL;
  const token = getLoginToken();
// eslint-disable-next-line max-len
  const searchStringFormated = FormatStringForSearch(q); // ici je me suis dis que le formatage est probablement pareil mais à essayer  comme le serveur semble down en ce moment
  return fetch(`${URL}/search/artists?q=/${searchStringFormated}&limit=${limit}`, {
    headers: GetCORSAllowedHeader(token), })
    .then(response => response.json())
    .catch((error) => {
      FormatAndLogErrorMessage('Unable to fetch artist general search.', error);
    });
};
// GET /search/tracks
export const trackSearch = (q, unsecured, limit = 20) => {
  let URL = baseURL;
  if (unsecured) URL = unsecureBaseURL;
  const token = getLoginToken();
  const searchStringFormated = FormatStringForSearch(q);
  return fetch(`${URL}/search/tracks?q=/${searchStringFormated}&limit=${limit}`, {
    headers: GetCORSAllowedHeader(token), })
    .then(response => response.json())
    .catch((error) => {
      FormatAndLogErrorMessage('Unable to fetch track general search.', error);
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
  const token = getLoginToken();
  return fetch(`${URL}/albums/${albumId}`, {
    method: 'GET',
    headers: GetCORSAllowedHeader(token), })
    .then(response => response.json())
    .catch((error) => {
      FormatAndLogErrorMessage('Unable to fetch an album.', error);
    });
};

// GET /albums/:id/tracks
export const getAlbumTracks = (albumId, unsecured) => {
  let URL = baseURL;
  if (unsecured) URL = unsecureBaseURL;
  const token = getLoginToken();
  return fetch(`${URL}/albums/${albumId}/tracks`, {
    method: 'GET',
    headers: GetCORSAllowedHeader(token), })
    .then(response => response.json())
    .catch((error) => {
      FormatAndLogErrorMessage('Unable to fetch album tracks list.', error);
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
// GET /playlists/:id
export const getPlayListCollection = (playListId, unsecured) => {
  let URL = baseURL;
  if (unsecured) URL = unsecureBaseURL;
  const token = getLoginToken();
  return fetch(`${URL}/playlists/${playListId}`, {
    method: 'GET',
    headers: GetCORSAllowedHeader(token), })
    .then(response => response.json())
    .catch((error) => {
      FormatAndLogErrorMessage('Unable to fetch the playlist.', error);
    });
};

// GET /playlists/
export const getCommonPlayList = (unsecured) => {
  let URL = baseURL;
  if (unsecured) URL = unsecureBaseURL;
  const token = getLoginToken();
  return fetch(`${URL}/playlists/`, {
    method: 'GET',
    headers: GetCORSAllowedHeader(token), })
    .then(response => response.json())
    .catch((error) => {
      FormatAndLogErrorMessage('Unable to fetch the playlist.', error);
    });
};

// POST /playlists
// PUT /playlists/:id
// POST /playlists/:id/tracks
// DELETE /playlists/:playlistId/tracks/:trackId

