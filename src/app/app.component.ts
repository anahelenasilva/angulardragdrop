import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angulardragdrop';

  numbers: number[] = [];

  constructor() {
    for (let i = 0; i < 10000; i++) {
      this.numbers.push(i);
    }
  }

  drop(event: CdkDragDrop<number[]>) {
    moveItemInArray(this.numbers, event.previousIndex, event.currentIndex);
  }
}
