import { Injectable } from "@angular/core";
import { Characters } from '../interfaces/dbz.interfaces';

@Injectable()
export class DbzService{

    private _characters: Characters[] = [
        {
          name: 'Goku',
          power: 15000
        },
        {
          name: 'Vegeta',
          power: 9000
        }
      ];
    get characters(): Characters[]{
        return [...this._characters];
    }
    constructor(){

    }

    AddCharacter(character:Characters){
        this._characters.push( character);

    }
}