import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClassesService {
  constructor(private http: HttpClient) {}

  getClassesList(): Observable<any> {
    return this.http.get(`${BaseURL}/api/v1.0.0/online-class/list/`, {
      headers: { Authorization: `Bearer ${Token}` },
      params: { size: 20, page: 1 },
    });
  }
}

const BaseURL: string = 'https://api.madtalk.ir';

const Token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzIxNDE5MTk0LCJpYXQiOjE3MjEzMjg5MDcsImp0aSI6IjkyNTA1NDRmOGUxNTQ4ZTY4YTMwNWMwMGZkNjkzNzE4IiwidXNlcl9pZCI6MjI3OTMsInRva2VuX3V1aWQiOiJkNzMxNGJmZi05M2YyLTQ2OWItOTdkNC0xZjU5ZDUwZDE3MTEifQ.7oOQSmbeuF31XtCzL59r0ygkQnN23djNJLkNET1ycfs';
