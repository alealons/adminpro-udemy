import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnInit, OnDestroy {

  //Guardo el observable en una variable para poder hacer el UNSUBSCRIBE
  subcriber: Subscription;

  constructor() {
    this.subcriber =  this.llamarObservable().subscribe( resp => {
      console.log(resp);
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subcriber.unsubscribe();
  }
  llamarObservable(): Observable<number> {

    let contador = 0;
    return new Observable( (observer: Subscriber<number>) => {

    for (let i = 1; i < 10; i++) {
      contador += 1;
      observer.next(contador);
    }

    }).pipe(
        // Operador Filter retorna TRUE o FALSE siempre. Deja pasar o no un valor.
        // Puede usarse antes del map.
        filter ( (valor, index) => {

            if ( (valor % 2) === 0) {
              return true;
            } else {
              return false;
            }
        })
    )
  }
}
