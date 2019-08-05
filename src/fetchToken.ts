import axios from 'axios';
import {baseUrl, client, secret} from './devAccount';

function base64(text: string): string {
  return Buffer.from(text).toString('base64');
}

type Token = {
  access_token: string,
  token_type: string, //'bearer',
  expires_in: number,
  scope: string, // 'read write'
}

export async function fetchToken(): Promise<string> {
  const response = await axios.post(`${baseUrl}/api/v1/account/token`, {}, {
    headers: {
      Authorization: `Basic ${base64(client + ':' + secret)}`,
    },
  });
  const token: Token = response.data;
  return token.access_token;
}
