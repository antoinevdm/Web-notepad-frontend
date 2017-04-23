import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { notesComponent } from './notes.component';

@Component({
    selector : 'new-note', //selector "new-note" can be used as a html tag now
    templateUrl : 'app/templates/newNoteForm.component.html',
})

export class newNoteComponent implements OnInit {
    @Output() cancelEvent: EventEmitter<any> = new EventEmitter<any>();
    @Input() modifiedNote: any;

    categories = ['todo', 'remarque', 'nePasOublier', 'autre'];

    noteFormGroup: FormGroup;

    ngOnInit() {
        this.noteFormGroup = new FormGroup({
            noteTitle: new FormControl(),
            noteContent: new FormControl()
        });
        // TODO : trouble shoot empty while new note
    }

    onCanceled() {
        this.cancelEvent.emit();
    }

    onNoteSubmit() {
    }
}
