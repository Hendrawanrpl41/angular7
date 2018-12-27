import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'testpipes'
})
export class TestpipesPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return 'Rp' + value;
  }

}
