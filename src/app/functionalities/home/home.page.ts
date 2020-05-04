import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import * as moment from 'moment';
import { HomeService } from './home.service';
import * as fromRoot from '@core/store/reducers';
import { Store } from '@ngrx/store';
import { selectFeature } from './reducers';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public extrato: any;
  public goals: any;
  public resultado$: any;
  private updateHome$ = this.store.select(selectFeature);

  constructor(
    private homeService: HomeService,
    private navCtrl: NavController,
    private store: Store<fromRoot.State>
  ) {}

  ngOnInit() {
    this.updateHome$.subscribe((r) => {
      console.log('Result', r);
      this.init();
    });
    this.init();
  }

  private init(): void {
    this.resultado$ = this.homeService.goalForecast();
    this.extrato = this.homeService.financialHistory();
  }

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

  onAbrirTela(pagina: string) {
    this.navCtrl.navigateForward(pagina);
  }
}
