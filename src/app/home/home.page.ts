import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public notes: Tasks[] = [];
  public titleInput = '';
  public newInput = '';

  constructor() { }

  addNote() {
    if (this.titleInput !== '') {
      this.notes.push({ title: this.titleInput, done: false, editMode: false });
      this.titleInput = '';
      console.log(this.notes);
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Opa...',
        text: 'Insira uma tarefa!'
      });
    }
  }

  editNote(note, idx: number) {
    note.editMode = !note.editMode;
    this.notes[idx].title = this.newInput;
    this.newInput = '';
  }

  deleteNote(i) {
    this.notes.splice(i, 1);
  }

}

interface Tasks {
  title: string;
  done: boolean;
  editMode: boolean;
}
