import { MyApp } from './app.component';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { Camera } from '@ionic-native/camera'; 
import { OAuthModule } from '../pages/oauth/oauth.module';
import { Config } from '../config';
import { SocialSharing } from '@ionic-native/social-sharing';
import { Screenshot } from '@ionic-native/screenshot';

import { HomePage } from '../pages/home/home';
import { CreateDeckPage } from '../pages/create-deck/create-deck';
import { FindAddDeckPage } from '../pages/find-add-deck/find-add-deck';
import { MyDecksPage } from '../pages/my-decks/my-decks';
import { CardPage } from '../pages/card/card';
import { CardViewerPage } from '../pages/card-viewer/card-viewer';
import { FindCardPage } from '../pages/find-card/find-card';
import { AboutUsPage } from '../pages/about-us/about-us';
import { EditDeckPage } from '../pages/edit-deck/edit-deck';
import { QuizPage } from '../pages/quiz/quiz';
import { ProfilePage } from '../pages/profile/profile';
import { PhraseModalPage } from '../pages/phrase-modal/phrase-modal';
import { QuizResultsPage } from '../pages/quiz-results/quiz-results';
import {TextToSpeech } from '@ionic-native/text-to-speech';
import { LanguageService } from '../services/language.service';
import { CameraService } from '../services/camera.service';
import { DeckService } from '../services/deck.service';
import { PhraseService } from '../services/phrase.service';
import { AnswerService } from '../services/answer.service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CreateDeckPage,
    FindAddDeckPage,
    MyDecksPage, 
    AboutUsPage,
    EditDeckPage,
    QuizPage,
    ProfilePage,
    CardPage,
    CardViewerPage,
    PhraseModalPage,
    FindCardPage,
    QuizResultsPage
  ],
  imports: [
    BrowserModule,
		HttpModule,
    OAuthModule,
    IonicModule.forRoot(MyApp),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [Http]
      }
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CreateDeckPage,
    FindAddDeckPage,
    MyDecksPage,
    AboutUsPage,
    EditDeckPage,
    QuizPage,
    ProfilePage,
    CardPage,
    CardViewerPage,
    PhraseModalPage,
    FindCardPage,
    QuizResultsPage
  ],
  providers: [
    Config,
    StatusBar,
    SplashScreen,
    Camera,
    LanguageService,
    CameraService,
    DeckService,
    PhraseService,
    AnswerService,
    SocialSharing,
    Screenshot,
    TextToSpeech,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

export function createTranslateLoader(http: Http) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
