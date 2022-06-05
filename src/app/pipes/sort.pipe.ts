import { Pipe, PipeTransform } from '@angular/core';
import { IPhone } from '../phone-book/phone-book.component';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(contactsArr: IPhone[], type: string, column: string): IPhone[] {
    if (!contactsArr) { return [] };
    if (!type) { return contactsArr };
    if (column === 'frName' && type === 'asc') { return contactsArr.sort((a, b) => a.firstName > b.firstName ? 1 : ((a.firstName < b.firstName) ? -1 : 0)) }
    else if (column === 'frName' && type === 'desc') { return contactsArr.sort((a, b) => a.firstName < b.firstName ? 1 : ((a.firstName > b.firstName) ? -1 : 0)) }
    if (column === 'lsName' && type === 'asc') { return contactsArr.sort((a, b) => a.lastName > b.lastName ? 1 : ((a.lastName < b.lastName) ? -1 : 0)) }
    else if (column === 'lsName' && type === 'desc') { return contactsArr.sort((a, b) => a.lastName < b.lastName ? 1 : ((a.lastName > b.lastName) ? -1 : 0)) }
    if (column === 'phoneNum' && type === 'asc') { return contactsArr.sort((a, b) => a.phoneNumber > b.phoneNumber ? 1 : ((a.phoneNumber < b.phoneNumber) ? -1 : 0)) }
    else if (column === 'phoneNum' && type === 'desc') { return contactsArr.sort((a, b) => a.phoneNumber < b.phoneNumber ? 1 : ((a.phoneNumber > b.phoneNumber) ? -1 : 0)) }
    return contactsArr;
  }

}
