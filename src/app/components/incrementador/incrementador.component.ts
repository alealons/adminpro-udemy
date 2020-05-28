import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {

 @ViewChild('txtProgreso') txtProgreso: ElementRef;
 @Input() porcentaje: number = 0;
 @Input('nombre') leyenda: string = 'Leyenda';

 @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

  aumentarPorcentaje(){
    if (this.porcentaje >= 100) {
      this.porcentaje = 100;
      return;
    } else {
    this.porcentaje += 5;
  }
    //EMITO EL VALOR DEL OUTPUT
    this.cambioValor.emit ( this.porcentaje );
}

  disminuirPorcentaje(){
    if (this.porcentaje <= 0) {
      this.porcentaje = 0;
      return;
    } else {
    this.porcentaje -= 5;
  }
  //EMITO EL VALOR DEL OUTPUT
  this.cambioValor.emit ( this.porcentaje );
}

onChanges(event: number){

  if (event > 100  ){
    this.porcentaje = 100;
  } else if (event <= 0  ) {
    this.porcentaje = 0;
  }

  this.txtProgreso.nativeElement.value = this.porcentaje;
  this.txtProgreso.nativeElement.focus();

  this.cambioValor.emit ( this.porcentaje );
}


}
