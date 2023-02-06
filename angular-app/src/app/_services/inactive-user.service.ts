import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { fromEvent } from 'rxjs';
import { AuthService } from './auth.service';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class InactiveUserService {

 private expiryTime = 1800; // on seconds
  private intervalId:any;

  constructor(
    private authService: AuthService,
    private router: Router,
    private tokenStorage : TokenStorageService,
   
   
  ) {
    fromEvent(document, 'mousemove').subscribe(() => this.checkUserActivity());
    fromEvent(document, 'scroll').subscribe(() => this.checkUserActivity());
    fromEvent(document, 'keydown').subscribe(() => this.checkUserActivity());
    this.checkUserActivity();
  }



  checkUserActivity() {
    this.updateTimeout();
    clearInterval(this.intervalId);
    this.intervalId = setInterval(() => {
      if(sessionStorage.getItem('_expiredTime')) {
       // console.log(sessionStorage.getItem('_expiredTime'))
       // console.log(Date.now())
         const _expiredTime =(sessionStorage.getItem('_expiredTime'), 10);
        if (Date.now() > _expiredTime) {
         // console.log(this.tokenStorage.isLoggedIn())
          if (this.tokenStorage.isLoggedIn()) {
           
            //console.log(Date.now())
          //  console.log(_expiredTime)
            //window.location.reload();
            this.tokenStorage.signOut();
            
            console.warn('Votre session a été expiré, vous devez reconnecter');
            console.log('INACTIVE');
            window.location.reload();
            //this.router.navigate(['/login']);
            alert("session expired");
          }
        
          this.cleanUp();
         

        }
      }
    }, 100000)//1000 =>100000
  }

  updateTimeout() {
    //console.log("*************",(new Date().getTime() + this.expiryTime * 1000))
    sessionStorage.setItem("_expiredTime", '' + (new Date().getTime() + this.expiryTime * 1000));
  }

  cleanUp() {
    clearInterval(this.intervalId);
    sessionStorage.removeItem('_expiredTime');
  }

}
