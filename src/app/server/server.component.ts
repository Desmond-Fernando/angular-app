import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {

  serverId: number = 10;
  serverStatus: string = 'Offline';
  allowNewServer = false;
  serverCreationStatus = "Server not yet created";
  serverName = '';
  serverCreated = false;

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'Online' : 'Offline';
    setTimeout(() => {
      this.allowNewServer = true;
    },3000);
  }

  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus = "Server just created " + this.serverName;
  }

  getServerStatus() {
    return this.serverStatus;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  getColor() {
    return this.serverStatus === 'Online' ? 'green' : 'red';
  }
}
