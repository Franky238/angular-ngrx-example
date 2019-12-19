import {morphism, StrictSchema} from 'morphism';

export class ImageEntity {
  id: number;
  title: string;
  subtitle: string;
  url: string;
  likesCount: number;
  createdAt: Date;
  updatedAt: Date;
}

export type ImageRequest = Partial<Pick<ImageEntity, 'title' | 'subtitle' | 'url'>>;

export const mapImageFromResponse = morphism<StrictSchema<ImageEntity, any>>({
  id: 'id',
  title: 'title',
  subtitle: 'subtitle',
  url: 'url',
  likesCount: 'likes_count',
  createdAt: source => new Date(source.createdAt),
  updatedAt: source => new Date(source.updatedAt),
});
