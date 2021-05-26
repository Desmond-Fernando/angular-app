import {ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output('serverCreated') serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput', {static:true}) serverContent: ElementRef;

  constructor() { }

  ngOnInit(): void {
    // console.log(this.serverContent.nativeElement);
  }

  onAddServer(nameInput: HTMLInputElement) {
    console.log(nameInput);
    this.serverCreated.emit({
      // serverName: this.newServerName,
      serverName: nameInput.value,
      // serverContent: this.newServerContent
      serverContent: this.serverContent.nativeElement.value
    })
  }

  onAddBlueprint(serverNameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: serverNameInput.value,
      serverContent: this.serverContent.nativeElement.value
    })
  }

}
