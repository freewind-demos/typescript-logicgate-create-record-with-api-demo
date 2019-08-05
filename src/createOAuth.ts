import {fetchToken} from './fetchToken';
import {OAuth} from './logicgate-api/Authentication';

export async function createOAuth() {
  const token = await fetchToken();
  const oauth = new OAuth();
  oauth.accessToken = token;
  return oauth;
}
