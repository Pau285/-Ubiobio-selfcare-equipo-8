import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  userText: string = "";

  constructor(private router: Router) {}

  nextPageWithQueryParams() {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        param: this.userText 
      }
    }

    this.router.navigate(['content'], navigationExtras);
  }
  

  nextPageWithService() {
  
  }

  nextPageWithState() {
  
  }
}
