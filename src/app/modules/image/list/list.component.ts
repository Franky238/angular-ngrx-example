import {Component, OnDestroy, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {State} from '../shared/reducers/list.reducer';
import {FetchImagesAction, LikeAction, UnlikeAction} from '../shared/actions/list.actions';
import {ImageEntity} from '../../../entities/image.entity';
import {imageSelectors} from '../shared';
import {takeUntil} from 'rxjs/operators';
import {UnsubscribingComponent} from '../../../shared/utils/unsubscribing.component';
import {RouterGoAction} from '../../../app.actions';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent extends UnsubscribingComponent implements OnInit, OnDestroy {

  public images: ImageEntity[] = [];

  constructor(
    private store$: Store<State>,
    private activatedRoute: ActivatedRoute,
  ) {
    super();
  }

  ngOnInit() {
    this.store$.dispatch(FetchImagesAction());

    this.store$.pipe(
      select(imageSelectors.list.images),
      takeUntil(this.unsubscribe$),
    ).subscribe(images => {
      this.images = images;
    });
  }

  public likeImg(id: number) {
    this.store$.dispatch(LikeAction({id}));
  }

  public unlikeImg(id: number) {
    this.store$.dispatch(UnlikeAction({id}));
  }

  public goToCreate() {
    this.store$.dispatch(RouterGoAction({commands: ['../', 'create'], extras: {relativeTo: this.activatedRoute}}));
  }
}
