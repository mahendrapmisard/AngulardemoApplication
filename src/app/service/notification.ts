import { Injectable } from '@angular/core';

@Injectable()
export abstract class NotificationService {
  abstract send(message: string): string;
}