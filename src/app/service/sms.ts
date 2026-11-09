import { Injectable } from '@angular/core';
import { NotificationService } from './notification';

@Injectable()
export class SmsService extends NotificationService {
  send(message: string): string {
    return `SMS notification sent successfully: ${message}`;
  }
}
