import { Component, ChangeDetectionStrategy, signal } from '@angular/core';

@Component({
  selector: 'app-c6',
  standalone: true,
  imports: [],
  templateUrl: './c6.component.html',
  styleUrl: './c6.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class C6Component {
  count = signal(0);
  ngDoCheck() {
    console.log('ngDoCheck c6=',this.count.update(v => v + 1));  
}
increment() {
  //this.count.update(v => v + 1);
}
}
