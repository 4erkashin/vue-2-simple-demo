import { AxiosResponse } from 'axios';
import { httpClient } from '@/utils/httpClient';
import type { INote } from './types';

export function getNotes(): Promise<AxiosResponse<INote[]>> {
  return httpClient.get<INote[]>('/user/1/posts/');
}

export function getNote(id: INote['id']) {
  return httpClient.get<INote>(`/posts/${id}`);
}
