import {Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'admin-properties',
  templateUrl: './admin-properties.component.html',
  styleUrls: ['admin-properties.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AdminPropertiesComponent implements OnInit {
  @Input() properties:any = {};
  @Input() title: string;

  @Output() onClose: EventEmitter<any> = new EventEmitter();
  @Output() onSave: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  close(){
    this.onClose.emit();
  }

  save(){
    this.onSave.emit(this.properties);
  }

}
