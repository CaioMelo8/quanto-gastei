import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { ExpenseProvider } from '../providers/expense/expense';
import { MyApp } from './app.component';
import { AlertProvider } from '../providers/alert/alert';
import { ModalProvider } from '../providers/modal/modal';
import { ToastProvider } from '../providers/toast/toast';

@NgModule({
  declarations: [MyApp],
  imports: [BrowserModule, IonicModule.forRoot(MyApp)],
  bootstrap: [IonicApp],
  entryComponents: [MyApp],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ExpenseProvider,
    AlertProvider,
    AlertProvider,
    ModalProvider,
    ToastProvider,
  ],
})
export class AppModule {}
