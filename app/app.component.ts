import { Component } from '@angular/core';
import { AuthService } from './auth.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'carzy';
  currentYear: number = new Date().getFullYear();

  isLoggedIn = false;

  constructor(private authService: AuthService){}

  ngOnInit(){
    this.authService.isLoggedIn$.subscribe(status => {
      this.isLoggedIn = status;
      console.log('Login status updated in AppComponent:', status)
    });
  }

  logout(){
    this.authService.logout();
  }
}
