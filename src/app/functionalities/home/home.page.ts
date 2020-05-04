import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '@env/environment';
import { HomeService } from './home.service';
import * as moment from 'moment';
import { NavController, ModalController } from '@ionic/angular';
import * as fromRoot from '@core/store/reducers';
import { Store } from '@ngrx/store';
import { selectFeature } from './reducers';
import { DepositComponent } from '../deposit/deposit.component';

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
  private updateHome$ = this.store.select(selectFeature);

  constructor(
    private homeService: HomeService,
    private navCtrl: NavController,
    private store: Store<fromRoot.State>,
    public modalController: ModalController
  ) {}

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
    this.updateHome$.subscribe((r) => {
      console.log('Result', r);
      this.init();
    });
  }

  private init(): void {
    console.log(JSON.stringify(this.extrato));
    this.urlPork = this.getPork(1200);
    this.resultado$ = this.homeService.goalForecast();
    this.extrato = this.homeService.financialHistory();
  }

  onAbrirTela(pagina: string) {
    this.navCtrl.navigateForward(pagina);
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: DepositComponent,
    });
    modal.present().then((r) => console.log(r));
  }
}
