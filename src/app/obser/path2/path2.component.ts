import {Component, EventEmitter, OnDestroy, OnInit} from '@angular/core';
import {ActivationService} from "../activation-service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-path2',
  templateUrl: './path2.component.html',
  styleUrls: ['./path2.component.css']
})
export class Path2Component implements OnInit, OnDestroy {
  activated = false;
  private subscription: Subscription;

  constructor(private activationService: ActivationService) { }

  ngOnInit(): void {
    this.subscription = this.activationService.activattionEmitter.subscribe((activate: boolean)=> {
      this.activated = activate;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
