
class AbstractSearchResult {
  constructor(searchResultsRawObjectsFromApiJSON) {
    /*
    Create a new search result.

    searchResultsRawObjectsFromApiJSON: a result object as in the format below.

    example if called to: /search/artists?q=Metallica
    {
      "resultCount": 6,
      "results": [{
        "wrapperType": "artist",
        "artistType": "Artist",
        "artistName": "Metallica",
        "artistLinkUrl": "https://itunes.apple.com/us/artist/metallica/id3996865?uo=4",
        "artistId": 3996865,
        "amgArtistId": 4906,
        "primaryGenreName": "Rock",
        "primaryGenreId": 21,
        "radioStationUrl": "https://itunes.apple.com/station/idra.3996865"
      }, {
        ...
      }]
    }

    example if called to: /search/albums?q=back%20in%20black
    {
      "resultCount": 10,
      "results": [{
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
      }, {
        ...
      }]
    }

    example if called to: /search/tracks?q=The%20final%20countdown
    {
      "resultCount": 10,
      "results": [{
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
      }, {
        ...
      }]
    }
    */
    this.results = searchResultsRawObjectsFromApiJSON;
  }
}

class ArtistSearchResult extends AbstractSearchResult {
  constructor(searchResultsRawObjectsFromApiJSON) {
    super(searchResultsRawObjectsFromApiJSON);
    this.something = 0;  // TODO
  }

  getId() {
    this.something = this.something + 1;  // TODO
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
}

class AlbumSearchResult extends AbstractSearchResult {
  constructor(searchResultsRawObjectsFromApiJSON) {
    super(searchResultsRawObjectsFromApiJSON);
    this.something = 0;  // TODO
  }

  getId() {
    this.something = this.something + 1;  // TODO
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
}

class TrackSearchResult extends AbstractSearchResult {
  constructor(searchResultsRawObjectsFromApiJSON) {
    super(searchResultsRawObjectsFromApiJSON);
    this.something = 0;  // TODO
  }

  getId() {
    this.something = this.something + 1;  // TODO
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
}

class SearchResultFactory {
  constructor(searchResultsRawObjectsFromApiJSON) {
    // "wrapperType": "artist"
    // "wrapperType": "collection"
    // "wrapperType": "track"
    switch (searchResultsRawObjectsFromApiJSON.wrapperType) {
      case 'artist':
        return new ArtistSearchResult(searchResultsRawObjectsFromApiJSON);
      case 'collection':
        return new AlbumSearchResult(searchResultsRawObjectsFromApiJSON);
      case 'track':
        return new TrackSearchResult(searchResultsRawObjectsFromApiJSON);
      default:
        return new AbstractSearchResult(searchResultsRawObjectsFromApiJSON);
    }
  }
}

export default SearchResultFactory;
