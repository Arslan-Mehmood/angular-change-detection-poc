import { Component, ChangeDetectionStrategy, signal } from '@angular/core';

@Component({
  selector: 'app-c5',
  standalone: true,
  imports: [],
  templateUrl: './c5.component.html',
  styleUrl: './c5.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class C5Component {
  count = signal(0);
  ngDoCheck() {
    console.log('ngDoCheck c5=',this.count.update(v => v + 1));
}
increment() {
  //this.count.update(v => v + 1);
}
}
