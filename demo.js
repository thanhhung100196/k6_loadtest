// This code imports the 'http' and 'sleep' modules from the 'k6' library.
// It defines a default function that sends an HTTP GET request to 'https://test.k6.io' and then sleeps for 1 second.
import http from 'k6/http';
import { sleep } from 'k6';

export default function () {
  http.get('https://test.k6.io');
  sleep(1);
}