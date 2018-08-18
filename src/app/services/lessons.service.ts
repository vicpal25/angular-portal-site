
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Lesson} from "../model/lesson";
import {Observable, BehaviorSubject} from "rxjs";
import 'rxjs/add/operator/map';

@Injectable()
export class LessonsService {

    constructor(private http: HttpClient) {

    }

    loadAllLessons() : Observable<Lesson[]> {
        return this.http.get<any>('/api/lessons')
            .map(res => res.lessons)
    }

    findLessonById(id:number) {
        return this.http.get<Lesson>('/api/lessons/' + id);
    }

}

