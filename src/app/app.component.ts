import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // numbers = [1, 2, 3, 4, 5];
  odddNumbers = [1,3,5];
  evennNumbers = [2,4];
  onlyOdd = false;

  // serverId: number = 10;
  // serverStatus: string = 'Offline';
  // username: string = '';
  //
  // getServerStatus() {
  //   return this.serverStatus;
  // }

  serverElements = [
    {type: 'server', name: 'Testserver', content: 'Just a server'},
    {type: 'server', name: 'Testserver1', content: 'Just a server1'}
  ];
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];
  switchValue = 10;

  onServerAdded(serverData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }

  onChangeFirst() {
    this.serverElements[0].name = 'Changeddd!';
  }

  onDestroyFirst() {
    this.serverElements.splice(0,1);
  }

  onIntervalFired(firedNumber: number) {
    if(firedNumber % 2 === 0) {
      this.evenNumbers.push(firedNumber);
    } else {
      this.oddNumbers.push(firedNumber);
    }
  }
}

