import { Component, ChangeDetectionStrategy, signal } from '@angular/core';

@Component({
  selector: 'app-c4',
  standalone: true,
  imports: [],
  templateUrl: './c4.component.html',
  styleUrl: './c4.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class C4Component {
  count = signal(0);
  ngDoCheck() {
    console.log('ngDoCheck c4=',this.count.update(v => v + 1));  
}
increment() {
 // this.count.update(v => v + 1);
}
}