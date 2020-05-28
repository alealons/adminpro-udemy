import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

ajustes: Ajustes = {
  temaURL: 'assets/css/colors/default-dark.css',
  tema: 'default-dark'
};

constructor() {
  this.cargarAjustes();
 }

guardarAjustes(){

  localStorage.setItem('ajustes', JSON.stringify(this.ajustes));
}

cargarAjustes(){
  if (localStorage.getItem('ajustes')){
    this.ajustes =  JSON.parse(localStorage.getItem('ajustes'));
    this.aplicarTema(this.ajustes.tema);
  }else {
    this.aplicarTema(this.ajustes.tema);

  }

}

aplicarTema(color: string){
  const url = `assets/css/colors/${color}.css`
  document.getElementById('tema').setAttribute('href', url);
  this.ajustes.tema = color;
  this.ajustes.temaURL = url;
  this.guardarAjustes();

}


}


interface Ajustes {
  temaURL: string;
  tema: string;
}
