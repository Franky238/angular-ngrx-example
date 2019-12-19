import {Component, OnDestroy, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {State} from '../shared/reducers/list.reducer';
import {FetchImagesAction} from '../shared/actions/list.actions';
import {ImageEntity} from '../../../entities/image.entity';
import {imageSelectors} from '../shared';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnDestroy {

  public images: ImageEntity[] = [];
  private unsubscribe$ = new Subject();

  constructor(
    private store$: Store<State>,
  ) {
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

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
