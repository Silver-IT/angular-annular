import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pagination'
})
export class PaginationPipe implements PipeTransform {
    transform(data, args?) : Array<any> {
        if(!args){
            args = {
                pageIndex: 0,
                pageSize: 6,
                length: data.length
            }
        }    
        return this.paginate(data, args.pageSize, args.pageIndex);
   }

    paginate (array, page_size, page_number) {
        return array.slice(page_number * page_size, (page_number + 1) * page_size);
    }

}