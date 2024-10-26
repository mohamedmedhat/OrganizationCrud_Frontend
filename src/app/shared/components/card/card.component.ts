import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() name: string = '';
  @Input() description: string = '';
  @Output() onclick = new EventEmitter();

  nav() {
    this.onclick.emit();
  }
}
