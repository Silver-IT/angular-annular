import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'MailSearch'
})

export class MailSearchPipe implements PipeTransform {
  transform(value, args?): Array<any> {
    let searchText = new RegExp(args, 'ig');
    if (value) {
      return value.filter(mail => {
        if(mail.sender || mail.subject){
          if(mail.sender.search(searchText) !== -1 || mail.subject.search(searchText) !== -1){
            return true;
          }
        }
      });
    }
  }
}
