import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { C5Component } from '../c5/c5.component';
import { C6Component } from '../c6/c6.component';
@Component({
  selector: 'app-c2',
  standalone: true,
  imports: [C5Component,C6Component],
  templateUrl: './c2.component.html',
  styleUrl: './c2.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class C2Component {
  count = signal(0);
  ngDoCheck() {
    console.log('ngDoCheck c2=',this.count.update(v => v + 1));
}
increment() {
  //this.count.update(v => v + 1);
}
}
