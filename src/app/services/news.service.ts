import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { NewModel } from '../models/new.model';

const httpOptions = {
	headers: new HttpHeaders ({
		'Content-Type': 'application/json; charset=UTF-8',
	})
}

@Injectable({
	providedIn: 'root'
})
export class NewsService {
	private newsUrl: string ='https://jsonplaceholder.typicode.com/posts';
	constructor(
		private http: HttpClient,
		) { }
	getNew(id: number): Observable<NewModel> {
		return this.http.get<NewModel>(`${this.newsUrl}/${id}`)
	}

	getNews(): Observable<NewModel[]> {
		return this.http.get<NewModel[]>(`${this.newsUrl}?_sort=views&_order=desc`)
	}
}


