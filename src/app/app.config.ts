import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { NotificationService } from './service/notification';
import { EmailService } from './service/email';
import { SmsService } from './service/sms';
import { PushNotificationService } from './service/push-notification';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    {
      provide: NotificationService,
      useClass: EmailService,
    },
    EmailService,
    SmsService,
    PushNotificationService,
    {
      provide: 'APP_SETTINGS',
      useValue: {
        appName: 'Welcome to Notification Management Portal',
        admin: 'madan',
        maxMessageLength: 10,
      },
    },
    {
      provide: 'NOTIFICATION_TYPES',
      useValue: ['Email', 'SMS', 'Push Notification'],
    },
  ],
};
