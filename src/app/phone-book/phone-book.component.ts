import { Component, OnInit, ViewChild } from '@angular/core';
@Component({
  selector: 'app-phone-book',
  templateUrl: './phone-book.component.html',
  styleUrls: ['./phone-book.component.scss']
})

export class PhoneBookComponent implements OnInit {
  addInput = '';
  errorMessage = '';
  firstNameInput!: string; secondNameInput!: string; numberPhoneInput!: string;
  tSort!: string; cSort!: string;
  isModal!: boolean; isValid!: boolean;
  phoneIndex!: number;
  isEdit = false;

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
    this.errorMessage = '';
    this.isEdit = false;
    this.isModal = true;
  }

  deletePhone(index: number): void { this.contactsPhone.splice(index, 1) }

  editPhone(index: number): void {
    this.firstNameInput = this.contactsPhone[index].firstName;
    this.secondNameInput = this.contactsPhone[index].lastName;
    this.numberPhoneInput = this.contactsPhone[index].phoneNumber;
    this.errorMessage = '';
    this.phoneIndex = index;
    this.isEdit = true;
    this.isModal = true;
  }

  savePhone(): void {
    this.checkValidity();
    if (this.isValid) {
      const phoneNum = { firstName: this.firstNameInput, lastName: this.secondNameInput, phoneNumber: this.numberPhoneInput };
      this.isEdit ? this.contactsPhone.splice(this.phoneIndex, 1, phoneNum) : this.contactsPhone.push(phoneNum);
      this.closeModal();
    }
  }

  checkValidity(): void {
    const firstNameRegExp: boolean = /^[a-zA-z\s]{2,16}$/.test(this.firstNameInput);
    const lastNameRegExp: boolean = /^[a-zA-z\s]{2,20}$/.test(this.secondNameInput);
    const phoneNumberREgExp: boolean = /^((\+38)?\(?\d{3}\)?[\s\.-]?(\d{7}|\d{3}[\s\.-]\d{2}[\s\.-]\d{2}|\d{3}-\d{4}))$/.test(this.numberPhoneInput)
    this.isValid = false;

    if (firstNameRegExp && lastNameRegExp && phoneNumberREgExp) { this.isValid = true }
    else if (this.firstNameInput === '' || this.secondNameInput === '' || this.numberPhoneInput === '') { this.errorMessage = 'Please fill in all fields' }
    else if (!firstNameRegExp) { this.errorMessage = 'Please provide a valid First name.' }
    else if (!lastNameRegExp) { this.errorMessage = 'Please provide a valid Second name.' }
    else if (!phoneNumberREgExp) { this.errorMessage = 'Please provide a valid Phone number.' }
  }

  closeModal(): void { this.isModal = false }

  changeSort(chooseSort: string): void {
    this.cSort = chooseSort;
    this.tSort === 'asc' ? this.tSort = 'desc' : this.tSort = 'asc';
  }
}

export interface IPhone { firstName: string, lastName: string, phoneNumber: string }
