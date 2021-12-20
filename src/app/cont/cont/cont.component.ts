import {Component} from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `

    <h1>{{title}}</h1>
    <h3>Base is: <strong> {{base}} </strong></h3>
    <button (click) = "accumulate(base)" >+{{base}}</button>

    <span>{{num}}</span>
    <button (click) = "accumulate(-base)">-{{base}}</button>
    `
})

export class ContComponent{
    title = 'Cont app';
    num:number = 0;
    base:number = 5;
    accumulate(value:number){
    this.num +=value;
  }
}