import {OAuth} from "typescript-logicgate-api-demo/dist/public-api/Authentication";

export function createOAuth(token: string): OAuth {
  const oauth = new OAuth();
  oauth.accessToken = token;
  return oauth;
}
