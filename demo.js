import { sleep } from 'k6/http';

// This code imports the 'http' and 'sleep' modules from the 'k6' library.
// It defines a sleep(1);
sleep(1);
import { sleep } from 'k6';

export default function () {
  const url = 'https://alpha.conative.ai/login';
  const payload = {
    username: 'demo.contaive.ai',
    password: 'Conative@ai2022'
  };

  http.post(url, payload);
  sleep(1);
}