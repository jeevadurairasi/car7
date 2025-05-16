import { Injectable } from '@angular/core';
import  { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  register(userData: any) {
    throw new Error('Method not implemented.');
  }
  private loggedIn = new BehaviorSubject<boolean>(false);
   
  isLoggedIn$ = this.loggedIn.asObservable();

  constructor(private router: Router) { 
    const saved = localStorage.getItem('isLoggedIn');
    if(saved === 'true'){
      this.loggedIn.next(true);
    }
  }

  login(){
    this.loggedIn.next(true);
    localStorage.setItem('isLOggedIn', 'true');
  }

  logout(){
    this.loggedIn.next(false);
    localStorage.setItem('isLOggedIn', 'true');
    this.router.navigate(['/home']);
  }

  
}
