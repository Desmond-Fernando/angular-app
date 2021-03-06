import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-start',
  templateUrl: './pipe-start.component.html',
  styleUrls: ['./pipe-start.component.css']
})
export class PipeStartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  appStatus = new Promise(resolve => {
    setTimeout(() => {
      resolve('stable');
    },2000);
  });
  serverss: {instanceType: string, name: string, status: string, started: Date}[] = [
    {
      instanceType: 'medium',
      name: 'Production Server',
      status: 'stable',
      started: new Date(15, 1, 2017)
    },
    {
      instanceType: 'large',
      name: 'User Database',
      status: 'stable',
      started: new Date(15, 1, 2017)
    },
    {
      instanceType: 'small',
      name: 'Development Server',
      status: 'offline',
      started: new Date(15, 1, 2017)
    },
    {
      instanceType: 'small',
      name: 'Testing Environment Server',
      status: 'stable',
      started: new Date(15, 1, 2017)
    }
  ];
  filterStatus= '';
  getStatusClasses(server: {instanceType: string, name: string, status: string, started: Date}) {
    return {
      'list-group-item-success': server.status === 'stable',
      'list-group-item-warning': server.status === 'offline',
      'list-group-item-danger': server.status === 'critical'
    };
  }

  onAddServer() {
    this.serverss.push({
      instanceType: 'small',
      name: 'new server',
      status: 'stable',
      started: new Date(15, 1, 2017)
    })
  }

}
