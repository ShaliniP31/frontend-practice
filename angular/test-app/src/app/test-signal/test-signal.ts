import { Component, signal, computed } from '@angular/core';

@Component({
  selector: 'app-test-signal',
  imports: [],
  templateUrl: './test-signal.html',
  styleUrl: './test-signal.css',
})
export class TestSignal {

  //writable signal
  protected count = signal(0);

  increase(){
    // this.count.set(this.count()+1);
    this.count.update(value => value + 1);
  }

  decrease(){
    // this.count.set(this.count()-1);
    this.count.update(value => value - 1);
  }

   reset(){
    this.count.set(0);
  }

  //computed signal
  protected ccount = computed(() => this.count() * 2);
}
