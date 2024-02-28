import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  resulte='';
  getAction(item:any){
    this.resulte+=item;

  }
  equal(){
    this.resulte=eval(this.resulte);
  }
  reset(){
    this.resulte='';
  }


  title = 'Calculator';
}
