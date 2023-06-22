import { Pipe, PipeTransform } from '@angular/core';
import { Property } from '../pages/offers-overview/offers-overview.component';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {
  transform(items: Property[], filter: string): any {
    if (!items || !filter) {
      return items;
    }
    // filter items array, items which match and return true will be
    // kept, false will be filtered out
    return items.filter(item =>
      item.mainTitle?.indexOf(filter) !== -1 ||
      item.subTitle?.indexOf(filter) !== -1 ||  
      item.description?.indexOf(filter) !== -1 ||
      item.city?.indexOf(filter) !== -1 ||
      item.immoName?.indexOf(filter) !== -1 ||
      item.state?.indexOf(filter) !== -1 ||
      item.street?.indexOf(filter) !== -1 ||
      item.objectTypeName?.indexOf(filter) !== -1
    );
  }
}
