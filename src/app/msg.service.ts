import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MsgService {
  constructor(private http: HttpClient) {}

  url = 'https://chatgpt53.p.rapidapi.com/';

  hd = {
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': 'c344750183msha4f860ee8c7e1f3p1e249fjsn7625b0a14773',
      'X-RapidAPI-Host': 'chatgpt53.p.rapidapi.com',
    },
  };
  postMessage(message: string): Observable<any> {
    return this.http.post<any>(
      this.url,
      {
        messages: [
          {
            role: 'user',
            content: message,
          },
        ],
      },
      this.hd
    );
  }
}
