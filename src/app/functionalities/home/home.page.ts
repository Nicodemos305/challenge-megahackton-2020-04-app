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

  constructor(private homeService: HomeService, private navCtrl: NavController) {}

  calcaMonth(goal) {
    let months = moment(goal.expectedDate).diff(moment(goal.insertedAt), 'months', true);
    // return goal.value / months;
    return Math.round(months);
  }

  ngOnInit() {
    this.resultado$ = this.homeService.goalForecast();
    this.extrato = this.homeService.financialHistory();
  }

  onAbrirTela(pagina: string) {
    this.navCtrl.navigateForward(pagina);
  }
}
