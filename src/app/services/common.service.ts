import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError,share } from 'rxjs/operators';
import { Message } from '../models/message';


@Injectable()
export class CommonService {

    BASE_URL : string = "https://api.jsonbin.io/b/";

  constructor(public http: HttpClient) {
  }

  getSomething(id : string): Observable<Message>{
      return this.http.get<Message>(this.BASE_URL+id);
  }

  /*
  EXAMPLE METHOD FOR POST
  saveModel(model: Model): Observable<Model> {
    return this.http.post('api/model/post/', model);
  }

  EXAMPLE METHOD FOR PUT
  updateModel(model: Model) {
    return this.http.put('api/model/put/' + model.id, model);
  }

  EXAMPLE METHOD FOR DELETE
  deleteModel(model: Model) {
    return this.http.delete('api/model/delete/' + model.id);
  }*/

}
