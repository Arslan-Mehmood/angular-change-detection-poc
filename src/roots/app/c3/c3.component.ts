import { Component, ChangeDetectionStrategy, signal } from '@angular/core';

@Component({
  selector: 'app-c3',
  standalone: true,
  imports: [],
  templateUrl: './c3.component.html',
  styleUrl: './c3.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class C3Component {
  count = signal(0);
  ngDoCheck() {
    console.log('ngDoCheck c3=',this.count.update(v => v + 1));
}
increment() {
  //this.count.update(v => v + 1);
}
}
