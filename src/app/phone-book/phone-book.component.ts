import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-phone-book',
  templateUrl: './phone-book.component.html',
  styleUrls: ['./phone-book.component.scss']
})

export class PhoneBookComponent implements OnInit {
  addInput = '';
  firstPlaceholder = 'first name goes here';
  lastPlaceholder = 'second name goes here';
  numberPlaceholder = 'number phone goes here';
  firstNameInput!: string; secondNameInput = ''; numberPhoneInput!: string;
  isModal!: boolean; phoneIndex!: number;
  isValid = false; isEdit = false;

  contactsPhone: IPhone[] = [
    { firstName: 'Petya', lastName: 'Zhuk', phoneNumber: '0631111111' },
    { firstName: 'Petro', lastName: 'Petriv', phoneNumber: '0631222222' },
    { firstName: 'Alejandro', lastName: 'De Rio Albrechet', phoneNumber: '0633333333' },
    { firstName: 'Vasylyna', lastName: 'Vrublevska', phoneNumber: '0635555555' },
    { firstName: 'Ira', lastName: 'Tytar', phoneNumber: '0636666666' },
    { firstName: 'Sofia', lastName: 'Zhuk', phoneNumber: '0637777777' },
  ];

  constructor() { }
  ngOnInit(): void { }

  addPhone(): void {
    this.firstNameInput = '';
    this.secondNameInput = '';
    this.numberPhoneInput = '';
    this.isEdit = false;
    this.isModal = true;
  }

  deletePhone(index: number): void { this.contactsPhone.splice(index, 1) }

  editPhone(index: number): void {
    this.firstNameInput = this.contactsPhone[index].firstName;
    this.secondNameInput = this.contactsPhone[index].lastName;
    this.numberPhoneInput = this.contactsPhone[index].phoneNumber;
    this.phoneIndex = index;
    this.isEdit = true;
    this.isModal = true;
  }

  savePhone(): void {
    this.validity();
    if (this.isValid) {
      const phoneNum = { firstName: this.firstNameInput, lastName: this.secondNameInput, phoneNumber: this.numberPhoneInput };
      this.isEdit ? this.contactsPhone.splice(this.phoneIndex, 1, phoneNum) : this.contactsPhone.push(phoneNum);
      this.closeModal();
    }
  }

  closeModal(): void { this.isModal = false }

  validity(): void {
    const firstNameRegExp: boolean = /^[a-zA-z]{2,16}$/.test(this.firstNameInput);
    const lastNameRegExp: boolean = /^[a-zA-z]{2,16}$/.test(this.secondNameInput);
    const phoneNumberREgExp: boolean = /^((\+38)?\(?\d{3}\)?[\s\.-]?(\d{7}|\d{3}[\s\.-]\d{2}[\s\.-]\d{2}|\d{3}-\d{4}))$/.test(this.numberPhoneInput)
    if (this.firstNameInput && this.secondNameInput && this.numberPhoneInput) { this.isValid = true } else { this.isValid = false }

    if (this.firstNameInput === '') { this.firstPlaceholder = 'Login cannot be blank' }
    else if (!firstNameRegExp) { this.firstPlaceholder = 'Please provide a valid Login.' } else { this.firstPlaceholder = 'first name goes here' }

    if (this.secondNameInput === '') { this.lastPlaceholder = 'Login cannot be blank' }
    else if (!firstNameRegExp) { this.lastPlaceholder = 'Please provide a valid Login.' } else { this.lastPlaceholder = 'second name goes here' }

    if (this.numberPhoneInput === '') { this.numberPlaceholder = 'Login cannot be blank' }
    else if (!firstNameRegExp) { this.numberPlaceholder = 'Please provide a valid Login.' } else { this.numberPlaceholder = 'number phone goes here' }
  }


  sort(): void { } // це має бути pipe
}

interface IPhone { firstName: string, lastName: string, phoneNumber: string }

// Plan
// Створити валідацію для данних
// СТворити pipe для сортування,без параментів змінна toggle буде робити asc або desc та добавлятиметься клас з іконкою, можна через псевдоелемент
