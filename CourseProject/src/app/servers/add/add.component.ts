import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  @Output() serverAdded = new EventEmitter<{name: string, status: string}>();

  constructor() { }

  ngOnInit() {
  }

  onClick(name) {
    this.serverAdded.emit({
      name: name.value,
      status: 'Running From add component'
    });
  }
}
