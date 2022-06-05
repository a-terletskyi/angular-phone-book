import { Pipe, PipeTransform } from '@angular/core';
import { IPhone } from '../phone-book/phone-book.component';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(contactsArr: IPhone[], inputValue: string): IPhone[] {
    if (!contactsArr) { return [] };
    if (!inputValue) { return contactsArr };
    return contactsArr.filter(contact => {
      return contact.firstName.toLowerCase().includes(inputValue.toLowerCase())
          || contact.lastName.toLowerCase().includes(inputValue.toLowerCase())
          || contact.phoneNumber.toLowerCase().includes(inputValue.toLowerCase())
    });
  }
}
