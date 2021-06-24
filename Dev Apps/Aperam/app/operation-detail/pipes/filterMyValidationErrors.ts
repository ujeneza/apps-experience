
import { Pipe, PipeTransform } from '@angular/core';
import MiniValidationError from '../models/mini-validation-error-model';
@Pipe({
    name: 'filterMyValidationErrors',
    pure: false
  })
  export class FilterMyValidationErrorsPipe implements PipeTransform {
    transform(items: MiniValidationError[], filter: Object): any{
      if (!items || ! filter){
        return items;
      }
  
      return items.filter(item => item.metalUnitId === filter && item.violationMessage)
    }
  }