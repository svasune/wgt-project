import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recipie } from '../shared/recipie';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://localhost:5000/Recipie';

  constructor(private http: HttpClient) {}

  // httpHeaders = new HttpHeaders({
  //   'Content-Type': 'application/json',
  // });

  // load all elements of array
  // get(): Observable<Recipie[]> {
  //   const headers = new HttpHeaders()
  //     .set('content-type', 'application/json')
  //     .set('Access-Control-Allow-Origin', 'http://localhost:4200');
  //   return this.http.get<Recipie[]>(`${this.apiUrl}/all`, {
  //     headers: headers,
  //   });
  // }

  // // requires to send only one obj
  //   post(recipie: Recipie): Observable<Recipie> {
  //     const headers = new HttpHeaders()
  //       .set('content-type', 'application/json')
  //       .set('Access-Control-Allow-Origin', 'http://localhost:4200');
  //     return this.http.post<Recipie>(`${this.apiUrl}/1`, recipie, {
  //       headers: headers,
  //     });
  //   }

  //   //requires to send all the data
  //   put(recipie: Recipie): Observable<Recipie> {
  //     const headers = new HttpHeaders()
  //       .set('content-type', 'application/json')
  //       .set('Access-Control-Allow-Origin', 'http://localhost:4200');
  //     return this.http.put<Recipie>(`${this.apiUrl}/all`, recipie, {
  //       headers: headers,
  //     });
  //   }

  //   //Set method
  // }

  //   // round 2
  //   get(url: string) {
  //     4;
  //     return this.http.get(this.apiUrl + url, this.getRequestOptions());
  //   }

  //   post(url: string, data: object) {
  //     return this.http.post(this.apiUrl + url, data, this.getRequestOptions());
  //   }

  //   put(url: string, data: object) {
  //     return this.http.put(this.apiUrl + url, data, this.getRequestOptions());
  //   }

  //   delete(url: string) {
  //     return this.http.delete(`${this.apiUrl}${url}`, this.getRequestOptions());
  //   }

  //   private getRequestOptions() {
  //     const token = sessionStorage.getItem('access_token');
  //     const headers: { [key: string]: string } = {
  //       'Content-Type': 'application/json',
  //       'Access-Control-Allow-Origin': 'http://localhost:4200',
  //       Authorization: token ? `Bearer ${token}` : '',
  //     };
  //     return { headers };
  //   }
  // }

  getPeople(): Observable<Recipie[]> {
    console.log('getPeople ' + this.apiUrl + 'recipies');
    return this.http.get<Recipie[]>(this.apiUrl + 'recipies');
  }

  //Adding headers
  getPeopleWithHeaders(): Observable<Recipie[]> {
    const headers = { 'content-type': 'application/json' };
    console.log(headers);
    return this.http.get<Recipie[]>(this.apiUrl + 'recipies', {
      headers: headers,
    });
  }

  //Set method
  getPeopleWithSet(): Observable<Recipie[]> {
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', 'http://localhost:4200');
    console.log(headers);
    return this.http.get<Recipie[]>(this.apiUrl + 'recipies', {
      headers: headers,
    });
  }

  //This wont work
  getPeopleWithImmutable(): Observable<Recipie[]> {
    const headers = new HttpHeaders();
    headers.set('content-type', 'application/json');
    headers.set('Access-Control-Allow-Origin', 'http://localhost:4200');

    console.log(headers);
    return this.http.get<Recipie[]>(this.apiUrl + 'recipies', {
      headers: headers,
    });
  }

  getPeopleWithImmutable1(): Observable<Recipie[]> {
    let headers = new HttpHeaders();
    headers = headers.set('content-type', 'application/json');
    headers = headers.set(
      'Access-Control-Allow-Origin',
      'http://localhost:4200'
    );

    console.log(headers);
    return this.http.get<Recipie[]>(this.apiUrl + 'recipies', {
      headers: headers,
    });
  }

  getPeopleAppend(): Observable<Recipie[]> {
    let headers = new HttpHeaders();
    headers = headers.append('content-type', 'application/json');
    headers = headers.append(
      'Access-Control-Allow-Origin',
      'http://localhost:4200'
    );
    headers = headers.append(
      'content-type',
      'application/x-www-form-urlencoded'
    );
    headers = headers.append('customer-header', 'custom');
    console.log(headers);
    return this.http.get<Recipie[]>(this.apiUrl + 'recipies', {
      headers: headers,
    });
  }

  getPeopleHas(): Observable<Recipie[]> {
    let headers = new HttpHeaders();
    //headers=headers.append('content-type','application/json')
    headers = headers.append(
      'Access-Control-Allow-Origin',
      'http://localhost:4200'
    );
    if (!headers.has('content-type')) {
      headers = headers.append('content-type', 'application/json');
    }

    console.log(headers);
    return this.http.get<Recipie[]>(this.apiUrl + 'recipies', {
      headers: headers,
    });
  }

  getPeopleGet(): Observable<Recipie[]> {
    let headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', 'http://localhost:4200');

    const h = headers.get('content-type');
    if (h == null) {
      console.log('content type header not present');
    } else {
      console.log(h);
    }

    return this.http.get<Recipie[]>(this.apiUrl + 'recipies', {
      headers: headers,
    });
  }

  getPeopleGetAll(): Observable<Recipie[]> {
    let headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', 'http://localhost:4200')
      .append('content-type', 'application/x-www-form-urlencoded');

    const h = headers.getAll('content-type');
    console.log(h);

    return this.http.get<Recipie[]>(this.apiUrl + 'recipies', {
      headers: headers,
    });
  }

  getPeopleKeys(): Observable<Recipie[]> {
    let headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', 'http://localhost:4200')
      .append('content-type', 'application/x-www-form-urlencoded');

    const h = headers.keys();
    console.log(h);

    return this.http.get<Recipie[]>(this.apiUrl + 'recipies', {
      headers: headers,
    });
  }

  getPeopleDelete(): Observable<Recipie[]> {
    let headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', 'http://localhost:4200')
      .append('content-type', 'application/x-www-form-urlencoded');

    headers = headers.delete('content-type', 'application/json');

    //headers=headers.delete("content-type")

    console.log(headers);

    return this.http.get<Recipie[]>(this.apiUrl + 'recipies', {
      headers: headers,
    });
  }

  getPeopleFromObject(): Observable<Recipie[]> {
    let headers = new HttpHeaders({
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'content-type': 'application/json',
    });

    console.log(headers);

    return this.http.get<Recipie[]>(this.apiUrl + 'recipies', {
      headers: headers,
    });
  }

  addPerson(recipie: Recipie): Observable<Recipie> {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(recipie);
    console.log(body);
    return this.http.post<Recipie>(this.apiUrl + 'recipies', body, {
      headers: headers,
    });
  }
}
