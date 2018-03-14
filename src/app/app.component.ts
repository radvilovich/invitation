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
        this.getGoods();
    }

    public getGoods() {
        this.http.get('template/get-goods.php').subscribe(data => {
            this.goods = data;
        });
    }

    public reservation(good) {
        good.reserved = true;

        if (good.by !== '') {
            this.http.get('template/goods.php?name=' + good.name + '&by=' + good.by).subscribe(data => {

                this.getGoods();
            });
        }
    }


    public getGudsByTabId(){
      return this.goods.filter((good) => good.tab === this.selectedTab);
  }
}
