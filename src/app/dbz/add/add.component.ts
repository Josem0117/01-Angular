import { Component, Input, Output, EventEmitter} from '@angular/core';

import { Characters } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html'
})
export class AddComponent{

  constructor(private DbzService: DbzService){

  }
  @Input() newCharacter: Characters = {
    name : '', power: undefined
  }
  
  @Output() OnNewCharacter: EventEmitter<Characters> = new EventEmitter();

  add(){
    if (this.newCharacter.name.trim().length == 0) {return;}
    this.DbzService.AddCharacter( this.newCharacter);
    console.log(this.newCharacter);
    this.OnNewCharacter.emit(this.newCharacter);
    this.newCharacter = {
      name: '',
      power: undefined
    }
  }
}
