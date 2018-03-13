import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  public selectedTab = 'groomsmen';

  public tabs = [
      {id: "groomsmen", name: "Книжки", active: true},
      {id: "bridesmaid", name: "Игрушки", active: false},
      {id: "clothes", name: "Одежда", active: false},
  ];

  public goods: any = [];

    constructor(private http: HttpClient) {
        this.http.get('template/goods.json').subscribe(data => {
            this.goods = data;
        });


    }


  public getGudsByTabId(){
      return this.goods.filter((good) => good.tab === this.selectedTab);
  }
}
