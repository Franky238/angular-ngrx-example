import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ImageEntity} from '../../../../entities/image.entity';

@Component({
  selector: 'app-card-image',
  templateUrl: './card-image.component.html',
  styleUrls: ['./card-image.component.scss']
})
export class CardImageComponent implements OnInit {

  @Input()
  public image: ImageEntity;

  @Output()
  public likeClick = new EventEmitter<void>();

  @Output()
  public unlikeClick = new EventEmitter<void>();

  constructor() {
  }

  ngOnInit() {
  }

  public like(event: Event) {
    event.preventDefault();
    this.likeClick.emit();
  }

  public unlike(event: Event) {
    event.preventDefault();
    this.unlikeClick.emit();
  }

}
