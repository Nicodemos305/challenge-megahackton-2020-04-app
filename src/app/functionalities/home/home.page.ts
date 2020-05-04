import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '@env/environment';
import { HomeService } from './home.service';
import { Moment } from 'moment'; // add this 1 of 4
import * as moment from 'moment';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public extrato: any;
  public goals: any;
  public resultado$: any;
  public urlPork: string;

  constructor(private homeService: HomeService, private navCtrl: NavController) {}

  calcaMonth(goal) {
    let months = moment(goal.expectedDate).diff(moment(goal.insertedAt), 'months', true);
    // return goal.value / months;
    return Math.round(months);
  }

  calcDays(goal) {
    let days = moment(goal.expectedDate).diff(moment(goal.insertedAt), 'days', true);
    // return goal.value / months;
    return Math.round(days);
  }

  getPork(extract) {
    if (extract < 800) {
      return 'assets/magro.png';
    } else if (extract > 800 && extract <= 1200) {
      return 'assets/medio.png';
    } else if (extract > 1200 && extract < 2000) {
      return 'assets/gordo.png';
    } else if (extract > 2000) {
      return 'assets/majin_boo.png';
    }
  }
  ngOnInit() {
    this.resultado$ = this.homeService.goalForecast();
    this.extrato = this.homeService.financialHistory();
    console.log(JSON.stringify(this.extrato));
    this.urlPork = this.getPork(1200);
  }

  onAbrirTela(pagina: string) {
    this.navCtrl.navigateForward(pagina);
  }
}
