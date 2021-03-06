import {Injectable} from "@angular/core";
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

// Import RxJs required operator methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class NoteService {
    constructor (private http: Http) {}
    private notesUrl = 'http://localhost/first_project/web/app_dev.php/note/api/note';

    getNotes() {
        return this.http.get(this.notesUrl)
            .map((res:Response) => res.json());
    }

    getNote(id : Number) {
        return this.http.get(this.notesUrl + "/" + id)
            .map((res:Response) => res.json());
    }

    createNote(note : any) {
        return this.http.post(this.notesUrl, this.serialize(note));
    }

    updateNote(note : any) {
        return this.http.put(this.notesUrl + "/" +  note.id, this.serialize(note));
    }

    deleteNote(note : any) {
        return this.http.delete(this.notesUrl + "/" + note.id);
    }

    private serialize(note: any) {
        return JSON.stringify({
            'title': note.title,
            'content': note.content,
            'categorie': note.categorie.id,
        });
    }
}
