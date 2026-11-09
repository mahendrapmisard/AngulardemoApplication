import { Injectable } from '@angular/core';
import { NotificationService } from './notification';

@Injectable()
export class PushNotificationService extends NotificationService {
  send(message: string): string {
    return `Push notification sent successfully: ${message}`;
  }
}