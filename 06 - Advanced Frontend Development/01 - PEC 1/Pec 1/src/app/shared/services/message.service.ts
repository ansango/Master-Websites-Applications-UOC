import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  message: string = '';

  add(message: string): void {
    this.message = message;
  }

  clear(): void {
    this.message = '';
  }
}
