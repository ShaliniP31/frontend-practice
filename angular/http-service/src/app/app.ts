import { Component, inject, signal} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Data } from './data';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private _dataService = inject(Data);

  posts= signal<any[]>([]);

  fetchAllPosts() {
    this._dataService.fetchAllPosts().subscribe(
      (posts) => {
      this.posts.set(posts);
      }
    );
    console.log(this.posts);
  }
}
