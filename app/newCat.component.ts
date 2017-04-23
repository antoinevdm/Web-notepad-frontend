import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { notesComponent } from './categories.component';

@Component({
    selector : 'new-cat', //selector "new-note" can be used as a html tag now
    templateUrl : 'app/templates/newCatForm.component.html',
})

export class newCatComponent implements OnInit {
    @Output() cancelEvent: EventEmitter<any> = new EventEmitter<any>();
    @Input() modifiedCat: any;

    noteFormGroup: FormGroup;

    ngOnInit() {
        this.noteFormGroup = new FormGroup({
            noteTitle: new FormControl(),
        });
    }

    onCanceled() {
        this.cancelEvent.emit();
    }

    onNoteSubmit() {
    }
}