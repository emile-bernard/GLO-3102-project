
class AbstractSearchResult {
  constructor(searchResultsRawObjectsFromApiJSON) {
    /*
    Create a new search result.

    searchResultsRawObjectsFromApiJSON: a result object as in
    the format specified by derived classes.
    */
    this.results = searchResultsRawObjectsFromApiJSON;
  }
}

class ArtistSearchResult extends AbstractSearchResult {
  /*
  Create a new search result.

  searchResultsRawObjectsFromApiJSON: a result object as in the format below.

  example if called to: /search/artists?q=Metallica
  {
      "wrapperType": "artist",
      "artistType": "Artist",
      "artistName": "Metallica",
      "artistLinkUrl": "https://itunes.apple.com/us/artist/metallica/id3996865?uo=4",
      "artistId": 3996865,
      "amgArtistId": 4906,
      "primaryGenreName": "Rock",
      "primaryGenreId": 21,
      "radioStationUrl": "https://itunes.apple.com/station/idra.3996865"
  }
  */
  constructor(result) {
    const withColorClass = result;
    withColorClass.colorClass = 'is-primary';
    super(withColorClass);
  }

  getId() {
    return this.results.artistId;
  }
  getType() {
    return this.results.wrapperType;
  }
  getName() {
    return this.results.artistName;
  }
  getURL() {
    // example, is used for: <router-link to="/artists/artistID"><span>artistID</span></router-link>
    return `/artists/${this.results.artistId}`;
  }
  getTypeColorClass() {
    return this.colorClass;
  }
}

class AlbumSearchResult extends AbstractSearchResult {
  /*
  Create a new search result.

  searchResultsRawObjectsFromApiJSON: a result object as in the format below.

  example if called to: /search/albums?q=back%20in%20black
  {
      "wrapperType": "collection",
      "collectionType": "Album",
      "artistId": 5040714,
      "collectionId": 574050396,
      "amgArtistId": 3496,
      "artistName": "AC/DC",
      "collectionName": "Back In Black",
      "collectionCensoredName": "Back In Black",
      "artistViewUrl": "https://itunes.apple.com/us/artist/ac-dc/id5040714?uo=4",
      "collectionViewUrl": "https://itunes.apple.com/us/album/back-in-black/id574050396?uo=4",
      "artworkUrl60": "http://a4.mzstatic.com/us/r30/Music/v4/18/c1/a4/18c1a4f8-3f50-9ba4-bdf9-b4148efa0564/886443673441.60x60-50.jpg",
      "artworkUrl100": "http://a5.mzstatic.com/us/r30/Music/v4/18/c1/a4/18c1a4f8-3f50-9ba4-bdf9-b4148efa0564/886443673441.100x100-75.jpg",
      "collectionPrice": 9.99,
      "collectionExplicitness": "notExplicit",
      "trackCount": 11,
      "copyright": "℗ 1980 Leidseplein Presse B.V.",
      "country": "USA",
      "currency": "USD",
      "releaseDate": "2012-11-19T08:00:00Z",
      "primaryGenreName": "Rock"
  }
  */
  constructor(result) {
    const withColorClass = result;
    withColorClass.colorClass = 'is-info';
    super(withColorClass);
  }

  getId() {
    return this.results.collectionId;
  }
  getType() {
    return this.results.wrapperType;
  }
  getName() {
    return this.results.collectionName;
  }
  getURL() {
    return `/albums/${this.results.collectionId}`;
  }
  getTypeColorClass() {
    return this.results.colorClass;
  }
}

class TrackSearchResult extends AbstractSearchResult {
  /*
  Create a new search result.

  searchResultsRawObjectsFromApiJSON: a result object as in the format below.

  example if called to: /search/tracks?q=The%20final%20countdown
  {
      "wrapperType": "track",
      "kind": "song",
      "artistId": 461932,
      "collectionId": 196480323,
      "trackId": 196480329,
      "artistName": "Europe",
      "collectionName": "The Final Countdown",
      "trackName": "The Final Countdown",
      "collectionCensoredName": "The Final Countdown",
      "trackCensoredName": "The Final Countdown",
      "artistViewUrl": "https://itunes.apple.com/us/artist/europe/id461932?uo=4",
      "collectionViewUrl": "https://itunes.apple.com/us/album/the-final-countdown/id196480323?i=196480329&uo=4",
      "trackViewUrl": "https://itunes.apple.com/us/album/the-final-countdown/id196480323?i=196480329&uo=4",
      "previewUrl": "http://a1815.phobos.apple.com/us/r1000/101/Music/70/f0/fd/mzm.hhpjhkpl.aac.p.m4a",
      "artworkUrl30": "http://a5.mzstatic.com/us/r30/Music/fc/4c/f5/mzi.jpmevzoi.30x30-50.jpg",
      "artworkUrl60": "http://a4.mzstatic.com/us/r30/Music/fc/4c/f5/mzi.jpmevzoi.60x60-50.jpg",
      "artworkUrl100": "http://a3.mzstatic.com/us/r30/Music/fc/4c/f5/mzi.jpmevzoi.100x100-75.jpg",
      "collectionPrice": 9.99,
      "trackPrice": 1.29,
      "releaseDate": "1988-09-16T07:00:00Z",
      "collectionExplicitness": "notExplicit",
      "trackExplicitness": "notExplicit",
      "discCount": 1,
      "discNumber": 1,
      "trackCount": 13,
      "trackNumber": 1,
      "trackTimeMillis": 310333,
      "country": "USA",
      "currency": "USD",
      "primaryGenreName": "Rock",
      "radioStationUrl": "https://itunes.apple.com/station/idra.196480329"
  }
  */
  constructor(result) {
    const withColorClass = result;
    withColorClass.colorClass = 'is-link';
    super(withColorClass);
  }

  getId() {
    return this.results.collectionId;
  }
  getType() {
    return this.results.wrapperType;
  }
  getName() {
    return `${this.results.trackName} (As seen in: ${this.results.collectionName})`;
  }
  getURL() {
    return `/albums/${this.results.collectionId}`;
  }
  getTypeColorClass() {
    return this.colorClass;
  }
}

class UserSearchResult extends AbstractSearchResult {
  /*
  Create a new search result.

  searchResultsRawObjectsFromApiJSON: a result object as in the format below.

  example if called to: /search/users?q=John%20Smith
  {
        "email": "john.smith@mail.com",
        "name": "John Smith",
        "id": "53ec122d27aafe77d8c37b8"
  }
  */
  constructor(result) {
    const withColorClass = result;
    withColorClass.colorClass = 'is-warning';
    super(withColorClass);
  }

  getId() {
    return this.results.id;
  }
  getType() {
    return this.results.wrapperType;
  }
  getName() {
    return `${this.results.name}`;
  }
  getURL() {
    return `/users/${this.results.id}`;
  }
  getTypeColorClass() {
    return this.colorClass;
  }
}

class SearchResultFactory {
  constructor(searchResultsRawObjectsFromApiJSON) {
    switch (searchResultsRawObjectsFromApiJSON.wrapperType) {
      case 'artist':
        return new ArtistSearchResult(searchResultsRawObjectsFromApiJSON);
      case 'collection':
        return new AlbumSearchResult(searchResultsRawObjectsFromApiJSON);
      case 'track':
        return new TrackSearchResult(searchResultsRawObjectsFromApiJSON);
      default: {
        const user = searchResultsRawObjectsFromApiJSON;
        user.wrapperType = 'user';
        return new UserSearchResult(user);
      }
    }
  }
}

export default SearchResultFactory;
