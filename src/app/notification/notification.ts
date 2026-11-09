import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NotificationService } from '../service/notification';
import { EmailService } from '../service/email';
import { SmsService } from '../service/sms';
import { PushNotificationService } from '../service/push-notification';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './notification.html',
})
export class Notification {
  message = '';
  selectedType = 'Email';
  result = '';
  defaultResult = '';

  constructor(
    private notificationService: NotificationService,
    private emailService: EmailService,
    private smsService: SmsService,
    private pushNotificationService: PushNotificationService,
    @Inject('APP_SETTINGS')
    public appSettings: {
      appName: string;
      admin: string;
      maxMessageLength: number;
    },
    @Inject('NOTIFICATION_TYPES')
    public notificationTypes: string[],
  ) {}

  sendNotification() {
    if (!this.message.trim()) {
      this.result = 'Please enter a message.';
      return;
    }

    if (this.message.length > this.appSettings.maxMessageLength) {
      this.result = `Message cannot exceed ${this.appSettings.maxMessageLength} characters.`;
      return;
    }

    if (this.selectedType === 'Email') {
      this.result = this.emailService.send(this.message);
    } else if (this.selectedType === 'SMS') {
      this.result = this.smsService.send(this.message);
    } else {
      this.result = this.pushNotificationService.send(this.message);
    }
  }

  sendUsingDefault() {
    if (!this.message.trim()) {
      this.defaultResult = 'Please enter a message.';
      return;
    }

    this.defaultResult = this.notificationService.send(this.message);
  }
}
