import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { C3Component } from '../c3/c3.component';
import { C4Component } from '../c4/c4.component';


@Component({
  selector: 'app-c1',
  standalone: true,
  imports: [
    C3Component,
    C4Component
  ],
  templateUrl: './c1.component.html',
  styleUrl: './c1.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush

})
export class C1Component {
count = signal(0);
  ngDoCheck() {
    console.log('ngDoCheck c1=',this.count.update(v => v + 1));
}
increment() {
  //this.count.update(v => v + 1);
}
}
