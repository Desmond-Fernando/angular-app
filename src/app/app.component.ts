import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  serverId: number = 10;
  serverStatus: string = 'Offline';
  username: string = '';

  getServerStatus() {
    return this.serverStatus;
  }

}
