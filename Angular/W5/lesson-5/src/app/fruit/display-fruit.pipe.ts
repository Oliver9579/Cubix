import {Pipe, PipeTransform} from '@angular/core';
import {Fruit} from './fruit.model';

@Pipe({
  name: 'displayFruit',
  pure: true
})
export class DisplayFruitPipe implements PipeTransform {

  transform(fruit: Fruit, isHated?: boolean): string {
    if (isHated) {
      return `${fruit.name} :((`;
    } else if (fruit.score > 5) {
      return `${fruit.name} :)`;
    } else {
      return fruit.name;
    }
  }

}
