import { Component, OnInit } from '@angular/core';
import { ConquestService } from './conquest.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-conquest',
  templateUrl: './conquest.page.html',
  styleUrls: ['./conquest.page.scss'],
})
export class ConquestPage implements OnInit {
  conquests$: Observable<any>;

  constructor(private conquestService: ConquestService) {}

  ngOnInit() {
    this.conquests$ = this.conquestService.getAll();
  }
}
