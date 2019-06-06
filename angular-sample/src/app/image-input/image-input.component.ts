import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-image-input',
  templateUrl: './image-input.component.html',
  styleUrls: ['./image-input.component.css']
})
export class ImageInputComponent implements OnInit {
  mensaje:string;
  @Output()
  propagar = new EventEmitter<string>();
  constructor() {
    this.mensaje="hola puiiiiiiiiii";
  }

  ngOnInit() {
  }
  onPropagar() {
    this.propagar.emit(this.mensaje);
  }

}
