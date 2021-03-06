import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  servers = [
    {name: 'PIT', status: 'Running'},
    {name: 'HRT', status: 'Running'},
    {name: 'Development', status: 'Never Running'}
  ];

  constructor() { }

  ngOnInit() {
  }

  newServerAdded(newServer) {
    //this.servers.push({name: newServer.name, status: newServer.status});
    this.servers.push(newServer);
  }

}
