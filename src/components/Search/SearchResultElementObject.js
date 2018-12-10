
class AbstractSearchResult {
  constructor(searchResultsRawObjectsFromApiJSON) {
    this.results = searchResultsRawObjectsFromApiJSON;
  }
}

class ArtistSearchResult extends AbstractSearchResult {
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
  getArtworkUrl() {
    return this.results.artworkUrl100;
  }
}

class TrackSearchResult extends AbstractSearchResult {
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
    return `/account?id=${encodeURIComponent(this.results.id)}&name=${encodeURIComponent(this.results.name)}&email=${encodeURIComponent(this.results.email)}`;
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
