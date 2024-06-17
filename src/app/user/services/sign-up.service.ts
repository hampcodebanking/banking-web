import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { SignUpRequest } from '../interfaces/signup-request.interface';

import { Profile } from '../interfaces/profile.interface';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  
  signup(signupRequest: SignUpRequest) {
    const url = `${this.baseUrl}/users/signup`;
    return this.http.post<Profile>(url, signupRequest);    
  }

}
