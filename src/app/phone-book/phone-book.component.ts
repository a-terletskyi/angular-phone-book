import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-phone-book',
  templateUrl: './phone-book.component.html',
  styleUrls: ['./phone-book.component.scss']
})

export class PhoneBookComponent implements OnInit {
  contactsPhone: IPhone[] = [
    { firstName: 'Petya', lastName: 'Zhuk', phoneNumber: '0631111111' },
    { firstName: 'Petro', lastName: 'Petriv', phoneNumber: '0631222222' },
    { firstName: 'Alejandro', lastName: 'De Rio Albrechet', phoneNumber: '0633333333' },
    { firstName: 'Vasylyna', lastName: 'Vrublevska', phoneNumber: '0635555555' },
    { firstName: 'Ira', lastName: 'Tytar', phoneNumber: '0636666666' },
    { firstName: 'Sofia', lastName: 'Zhuk', phoneNumber: '0637777777' },
  ];
  inputValue = '';

  constructor() { }
  ngOnInit(): void { }

  addPhone(input: HTMLInputElement): void { }

  editPhone(index: number): void { }

  deletePhone(index: number): void { }

  sort(): void {} // це має бути pipe
}

interface IPhone { firstName: string, lastName: string, phoneNumber: string }

// Plan
// Створити модальне вікно, застилізувати його
// Створити функцію, add яка буде добавляти елемент в масив
// Створити функцію delete для видалення з масиву
// Створити функцію edit, під час якої буде відкриватися модальне вікно (isModal = true), підставляємо дані з масиву в інпут поля
// та потім замінюємо дані в елементі масиву
// СТворити pipe для сортування,без параментів змінна toggle буде робити asc або desc та добавлятиметься клас з іконкою, можна через псевдоелемент
