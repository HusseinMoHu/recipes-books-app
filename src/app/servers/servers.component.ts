import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  public allowNewServer: boolean = false;
  public serverCreationStatus: string = '';
  public serverName: string = '';
  public serverCreated: boolean = false;
  public servers: string[] = ['Testserver', 'Testserver 2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {}

  onCreateServer(): void {
    this.servers.push(this.serverName);
    this.serverCreated = true;
    this.serverCreationStatus = `Server was created! Name is ${this.serverName}`;
  }

  // onUpdateServerName(event: Event): void {
  //   this.serverName = (<HTMLInputElement>event.target).value;
  // }
}
