import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { OverlayService } from '@app/core/services/overlay.service';

@Component({
  selector: 'app-overlay-loading',
  templateUrl: 'overlay-loading.component.html',
  styleUrls: ['overlay-loading.component.scss'],
})
export class OverlayLoadingComponent implements OnInit {
  loading$: BehaviorSubject<boolean>;

  constructor(private overlay: OverlayService) {}

  ngOnInit() {
    this.loading$ = this.overlay.loadingOverlay;
  }
}
