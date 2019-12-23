import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ActivationStart, Router} from '@angular/router';
import {LayoutType} from './shared/enums/layout.eum';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public layout: LayoutType = LayoutType.NORMAL;
  public LayoutType = LayoutType;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof ActivationStart)
    ).subscribe((event: ActivationStart) => {
      const {layout} = event.snapshot.data;
      this.layout = layout;
    });
  }

}
