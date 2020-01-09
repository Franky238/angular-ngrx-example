import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ImageEntity, ImageRequest, mapImageFromResponse} from '../entities/image.entity';
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

  public getImage(id: number): Observable<ImageEntity> {
    return this.httpClient.get<unknown>(`${ImageService.IMAGES_URL}/${id}`).pipe(
      map(response => mapImageFromResponse(response)),
    );
  }

  public likeImage(id: number): Observable<ImageEntity> {
    return this.httpClient.post<unknown>(`${ImageService.IMAGES_URL}/${id}/like`, {}).pipe(
      map(response => mapImageFromResponse(response)),
    );
  }

  public unlikeImage(id: number): Observable<ImageEntity> {
    return this.httpClient.post<unknown>(`${ImageService.IMAGES_URL}/${id}/unlike`, {}).pipe(
      map(response => mapImageFromResponse(response)),
    );
  }

  public createImage(request: ImageRequest): Observable<ImageEntity> {
    return this.httpClient.post<unknown>(ImageService.IMAGES_URL, request).pipe(
      map(response => mapImageFromResponse(response)),
    );
  }
}
