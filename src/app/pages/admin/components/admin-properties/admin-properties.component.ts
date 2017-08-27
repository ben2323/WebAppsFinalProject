import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'admin-properties',
  templateUrl: './admin-properties.component.html',
  styleUrls: ['admin-properties.component.scss']
})
export class AdminPropertiesComponent implements OnInit {
  @Input() properties:any = {};
  @Input() title: string = 'Title';

  @Output() onClose: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  close(){
    this.onClose.emit();
  }

}
