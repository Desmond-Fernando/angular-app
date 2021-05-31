import {Injectable, EventEmitter} from "@angular/core";
import {Subject} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class ActivationService {
  // activattionEmitter = new EventEmitter<boolean>();
  activattionEmitter = new Subject<boolean>();
}
