
const Cookies = require('js-cookie');
const TokenGenerator = require('uuid-token-generator');

const ACCESS_TOKEN = 'access_token';
const NEWS_COOKIE = 'news_token';
const tokengen = new TokenGenerator(); // Default is a 128-bit token encoded in base58

function setNewsToken(token) {
  Cookies.set(NEWS_COOKIE, `${token}`, { expires: 1 });
}

export function getNewsToken() {
  let token = Cookies.get(NEWS_COOKIE);
  if (typeof (token) === 'undefined') {
    const tokenGenerated = tokengen.generate();
    setNewsToken(tokenGenerated);
  }
  token = Cookies.get(NEWS_COOKIE);
  return token;  // is undefined by default if not set.
}

export function getLoginToken() {
  const token = Cookies.get(ACCESS_TOKEN);
  return token;  // is undefined by default if not set.
}

export function setLoginToken(token) {
  Cookies.set(ACCESS_TOKEN, `${token}`, { expires: 1 });
}

export function removeLoginToken() {
  Cookies.remove(ACCESS_TOKEN);
}

export function redirectToLoginIfNotLoggedIn(router, route) {
  // Arguments:
  //  const router = this.$router;
  //  const route = encodeURIComponent(this.$route.path);

  // const token = Cookies.get(ACCESS_TOKEN);
  const token = getLoginToken();
  if (typeof (token) === 'undefined') {
    router.push(`/login?redir=${route}`);
  }
}

export function redirectBackToWhereItWasBeforeOrDefault(router, fromRedir, defaultRedir, nested) {
  // Arguments:
  //  const router = this.$router;
  //  const fromRedir = this.$route.query.redir;
  //  const defaultRedir = '/logout'

  let redir = fromRedir;
  if (typeof (fromRedir) !== 'undefined') {
    if (nested) {
      redir = `${defaultRedir}?redir=${decodeURIComponent(fromRedir)}`;
    } else {
      redir = decodeURIComponent(fromRedir);
    }
  } else {
    redir = defaultRedir;
  }
  router.push(redir);
}
