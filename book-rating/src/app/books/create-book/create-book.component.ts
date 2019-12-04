import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'br-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent {

  bookForm = new FormGroup({
    isbn: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    title: new FormControl('', Validators.required),
    description: new FormControl('')
  });

  isInvalid(name: string) {
    const control = this.bookForm.get(name);
    return control.touched && control.invalid;
  }

  hasError(name: string, errorCode: string) {
    const control = this.bookForm.get(name);
    return control.touched && control.hasError(errorCode);
  }

  submitForm() {
    const newBook = {
      ...this.bookForm.value,
      rating: 1
    };

    // ???
    // 1. EventEmitter mit Namen "create"
    // 2. create soll emitten
    // 3. im Dashboard html soll darauf gelauscht werden
    // 4. dem Buch-array soll das Book hinzugefügt werden

    this.bookForm.reset();
  }
}
