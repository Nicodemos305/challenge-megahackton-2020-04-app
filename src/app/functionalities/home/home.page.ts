import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '@env/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public extrato:any;
  public goals:any;

  constructor(private http: HttpClient) { 
    this.extrato = [ {
      "transactionDate": "2020-05-03T20:41:14.838Z",
            "insertedAt": "2020-05-03T20:41:14.838Z",
            "updatedAt": "2020-05-03T20:41:14.838Z",
            "_id": "5eaf2c773d43421f48941c5c",
            "kind": "credit",
            "value": -5000000,
            "phone": "12345",
            "balance": 32490550,
            "__v": 0},
            {
              "transactionDate": "2020-05-03T20:41:14.838Z",
                    "insertedAt": "2020-05-03T20:41:14.838Z",
                    "updatedAt": "2020-05-03T20:41:14.838Z",
                    "_id": "5eaf2c773d43421f48941c5c",
                    "kind": "credit",
                    "value": -5000000,
                    "phone": "12345",
                    "balance": 32490550,
                    "__v": 0}

    ];
    //rota /goalForecast?phone=
    this.goals = [{"insertedAt":"2020-05-01T04:30:37.737Z","updatedAt":"2020-05-01T04:30:37.737Z","_id":"5eaba619539dcc0f2825bc1a","name":"Casar","phone":"12345","value":50000,"expectedDate":"2022-01-01T00:00:00.000Z","__v":0},{"insertedAt":"2020-05-02T18:57:12.170Z","updatedAt":"2020-05-02T18:57:12.170Z","_id":"5eadc34e6dfa21091a3ce041","phone":"12345","name":"Notebook","value":40000,"expectedDate":"2021-10-01T03:00:00.000Z","__v":0},{"insertedAt":"2020-05-02T18:57:12.170Z","updatedAt":"2020-05-02T18:57:12.170Z","_id":"5eadc3586dfa21091a3ce042","phone":"12345","name":"Carro zero","value":50000,"expectedDate":"2021-10-01T03:00:00.000Z","__v":0},{"insertedAt":"2020-05-02T18:57:12.170Z","updatedAt":"2020-05-02T18:57:12.170Z","_id":"5eadc3656dfa21091a3ce043","phone":"12345","name":"Violão","value":900,"expectedDate":"2021-10-01T03:00:00.000Z","__v":0},{"insertedAt":"2020-05-02T19:28:36.259Z","updatedAt":"2020-05-02T19:28:36.259Z","_id":"5eadca08490cd70a0772da2a","phone":"12345","name":"Livro O Guia dos mochileiros","value":50,"expectedDate":"2021-10-01T03:00:00.000Z","__v":0}];
  }

  ngOnInit() {

  }

 

}
