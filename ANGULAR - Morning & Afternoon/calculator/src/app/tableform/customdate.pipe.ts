import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
    name: 'customdate',
})
export class customdate implements PipeTransform {
    transform(value: string | null) {
       var datePipe = new DatePipe("en-US");
        value = datePipe.transform(value, 'dd MMM yyyy');
        return value;
    }
}