import { HttpClient } from '@angular/common/http';
import { Service, inject } from '@angular/core';

@Service()
export class Data {
    private http = inject(HttpClient);

    apiURL = "https://jsonplaceholder.typicode.com/posts";

    fetchAllPosts() {
       return this.http.get<any[]>(this.apiURL);
    }


}
