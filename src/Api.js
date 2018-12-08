import { getLoginToken } from './LoginCookies';

const baseURL = 'https://ubeat.herokuapp.com';
const unsecureBaseURL = 'https://ubeat.herokuapp.com/unsecure';
let lastErrotMessage;

export const getLastErrorMessage = () => lastErrotMessage;

function getQueryParamCurrentToken() {
  const token = `?access_token=${getLoginToken()}`;
  return token;
}

function getURL(unsecured) {
  lastErrotMessage = undefined;
  let URL = baseURL;
  if (unsecured) URL = unsecureBaseURL;
  return URL;
}

function FormatStringForSearch(stringToFormat) {
  // Commentaire de GUCHE sur ce code: peut-être remplacer toute cette fonction par celle-ci
  // laquelle est déjà disponible par defauilt dans JS: encodeURIComponent()

  const string = String(stringToFormat);
  const array = string.split(' ');
  const arraySize = array.length;
  let wordProcessed = 0;
  let finalString = '';
  array.forEach((word) => {
    wordProcessed += 1;
    if (wordProcessed !== arraySize) {
      finalString = `${finalString + word}%20`;
    }
  });
  return finalString;
}

function GetCORSAllowedHeader() {
  return {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credential': 'true',
  };
}

function FormatAndLogErrorMessage(message, originalError) {
  lastErrotMessage = message.toString() + originalError.toString();
  window.console.error(lastErrotMessage);
  alert(lastErrotMessage);
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
export const singUpNewUser = (data, unsecured) => {
  const URL = getURL(unsecured);
  return fetch(`${URL}/signup/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: data })
    .then(response => response.json())
    .catch((error) => {
      FormatAndLogErrorMessage('Unable to register a new user. The server error is : ', error);
    });
};
//-------------------------------------------------------------
// Token info
//-------------------------------------------------------------
// GET /tokenInfo
export const getTokenInfo = (unsecured) => {
  const URL = getURL(unsecured);
  const param = getQueryParamCurrentToken();
  return fetch(`${URL}/tokeninfo/${param}`, {
    method: 'GET',
    Header: GetCORSAllowedHeader(),
  })
    .then(response => response.json())
    .catch((error) => {
      FormatAndLogErrorMessage('Unable to get token information related to a user. The server error is : ', error);
    });
};

//-------------------------------------------------------------
// Recherche
//-------------------------------------------------------------
// GET /search
export const generalSearch = (q, unsecured, limit = 20) => {
  const URL = getURL(unsecured);
  return fetch(`${URL}/search?q=/${q}&limit=${limit}`, {
    headers: GetCORSAllowedHeader(), })
    .then(response => response.json())
    .catch((error) => {
      FormatAndLogErrorMessage('Unable to fetch general search.', error);
    });
};
// GET /search/albums
export const albumSearch = (q, unsecured, limit = 20) => {
  const URL = getURL(unsecured);
  const searchStringFormated = FormatStringForSearch(q);
  return fetch(`${URL}/search/album?q=/${searchStringFormated}&limit=${limit}`, {
    headers: GetCORSAllowedHeader(), })
    .then(response => response.json())
    .catch((error) => {
      FormatAndLogErrorMessage('Unable to fetch album general search. Original error: ', error);
    });
};
// GET /search/artists
export const artistSearch = (q, unsecured, limit = 20) => {
  const URL = getURL(unsecured);
  const searchStringFormated = FormatStringForSearch(q);
  // ici je me suis dis que le formatage est probablement pareil mais à essayer
  // comme le serveur semble down en ce moment

  return fetch(`${URL}/search/artists?q=/${searchStringFormated}&limit=${limit}`, {
    headers: GetCORSAllowedHeader(), })
    .then(response => response.json())
    .catch((error) => {
      FormatAndLogErrorMessage('Unable to fetch artist general search.', error);
    });
};
// GET /search/tracks
export const trackSearch = (q, unsecured, limit = 20) => {
  const URL = getURL(unsecured);
  const searchStringFormated = FormatStringForSearch(q);
  return fetch(`${URL}/search/tracks?q=/${searchStringFormated}&limit=${limit}`, {
    headers: GetCORSAllowedHeader(), })
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
  const URL = getURL(unsecured);
  return fetch(`${URL}/albums/${albumId}`, {
    method: 'GET',
    headers: GetCORSAllowedHeader(), })
    .then(response => response.json())
    .catch((error) => {
      FormatAndLogErrorMessage('Unable to fetch an album.', error);
    });
};

// GET /albums/:id/tracks
export const getAlbumTracks = (albumId, unsecured) => {
  const URL = getURL(unsecured);
  return fetch(`${URL}/albums/${albumId}/tracks`, {
    method: 'GET',
    headers: GetCORSAllowedHeader(), })
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
  const URL = getURL(unsecured);
  return fetch(`${URL}/playlists/${playListId}`, {
    method: 'GET',
    headers: GetCORSAllowedHeader(), })
    .then(response => response.json())
    .catch((error) => {
      FormatAndLogErrorMessage('Unable to fetch the playlist.', error);
    });
};

// GET /playlists/
export const getCommonPlayList = (unsecured) => {
  const URL = getURL(unsecured);
  return fetch(`${URL}/playlists/`, {
    method: 'GET',
    headers: GetCORSAllowedHeader(), })
    .then(response => response.json())
    .catch((error) => {
      FormatAndLogErrorMessage('Unable to fetch the playlist.', error);
    });
};


// POST /playlists
// PUT /playlists/:id
// POST /playlists/:id/tracks
// DELETE /playlists/:playlistId/tracks/:trackId

