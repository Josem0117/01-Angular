import { Component} from '@angular/core';
import { never } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',

})
export class ListComponent {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Kirito'];
  DeletedHeroes: string[] = [];
  DeleteHero(){
    const Deletedhero = this.heroes.shift();
    if (Deletedhero != undefined) {
      this.DeletedHeroes.unshift(Deletedhero);
    }

    
    console.log(this.DeletedHeroes);
  }
}
