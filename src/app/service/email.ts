import { Injectable } from '@angular/core';
import { NotificationService } from './notification';

@Injectable()
export class EmailService extends NotificationService {
  send(message: string): string {
    return `Email notification sent successfully: ${message}`;
  }
}