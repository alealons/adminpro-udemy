import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {

  constructor(  ) {

    this.esperar3Segundos().then( res => {
      if (res) { console.log('ok!'); }
    });
  }

  ngOnInit(): void {
  }

  esperar3Segundos(){

  return  new Promise( (res, rej ) => {

      let contador = 0;

      const intervalo = setInterval( () => {

          contador += 1;
          console.log(contador);
          if (contador === 3 ){
            res(true);
            clearInterval(intervalo);
          }

        }, 1000);

    });

  }

  }


