
const Cookies = require('js-cookie');

const ACCESS_TOKEN = 'access_token';


export function getLoginToken() {
  const token = Cookies.get(ACCESS_TOKEN);
  return token;  // is undefined by default if not set.
}

export function setLoginToken(token) {
  Cookies.set(ACCESS_TOKEN, `${token}`, { expires: 9000 });
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
