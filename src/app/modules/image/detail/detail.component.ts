import {Component, OnInit} from '@angular/core';
import {UnsubscribingComponent} from '../../../shared/utils/unsubscribing.component';
import {ActivatedRoute} from '@angular/router';
import {select, Store} from '@ngrx/store';
import {State} from '../shared/reducers/detail.reducer';
import {FetchImageAction} from '../shared/actions/detail.actions';
import {imageSelectors} from '../shared';
import {takeUntil} from 'rxjs/operators';
import {ImageEntity} from '../../../entities/image.entity';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent extends UnsubscribingComponent implements OnInit {

  public image: ImageEntity | null = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private store$: Store<State>,
  ) {
    super();
  }

  ngOnInit() {
    this.store$.dispatch(FetchImageAction({id: this.activatedRoute.snapshot.params.id}));

    this.store$.pipe(
      select(imageSelectors.detail.image),
      takeUntil(this.unsubscribe$),
    ).subscribe(image => {
      this.image = image;
    });
  }

  public getScreenHeight() {
    return window.innerHeight;
  }

}
