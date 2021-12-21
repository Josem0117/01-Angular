import { Component, Input } from '@angular/core';
import { Characters } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent{


  newCharacter: Characters = {
    name: 'roshi',
    power: 15000
  }

  AddNewCharacter(ReceivedCharacter : Characters){
    // this.characters.push(ReceivedCharacter);
  }
  constructor(){

  }

}
