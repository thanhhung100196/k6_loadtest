import http from 'k6/http';
import { sleep } from 'k6';


export default function () {
  const url = 'https://alpha.conative.ai/sign-in';
  const payload = {
    username: 'demo@contaive.ai',
    password: 'Conative@ai2022'
  };

  http.post(url, payload);
  sleep(1);
}