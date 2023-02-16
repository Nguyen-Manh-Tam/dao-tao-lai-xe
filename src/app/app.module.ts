import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { IntroduceComponent } from './components/introduce/introduce.component';
import { LawDocumentComponent } from './components/law-document/law-document.component';
import { RegisterComponent } from './components/register/register.component';
import { TheoryTestComponent } from './components/theory-test/theory-test.component';
import { SatFigure2Component } from './components/sat-figure-2/sat-figure-2.component';
import { SatFigure1Component } from './components/sat-figure-1/sat-figure-1.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    IntroduceComponent,
    LawDocumentComponent,
    RegisterComponent,
    TheoryTestComponent,
    SatFigure2Component,
    SatFigure1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
