import { Component } from "@angular/core";

@Component({
    selector: 'app-hero',
    templateUrl: 'hero.component.html'
})
export class HeroComponent{
    name: string = 'Spiderman';
    age: number = 34;
    
    get CapsName():string{
        return this.name.toUpperCase();
    }
    getName(): string{
        return this.name + ' - ' + this.age.toString();
    }
    changeName(): void{
        this.name = 'Superman';
    }
    changeAge(): void{
        this.age = 20;
    }
}