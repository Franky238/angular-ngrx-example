import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ImageEntity, mapImageFromResponse} from '../entities/image.entity';
import {map} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class ImageService {
  private static IMAGES_URL = 'http://localhost:4201/images';

  constructor(
    private httpClient: HttpClient,
  ) {
  }

  public getImages(): Observable<ImageEntity[]> {
    return this.httpClient.get<unknown[]>(ImageService.IMAGES_URL).pipe(
      map(response => mapImageFromResponse(response)),
    );
  }
}
