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
import { SatFigureB2Component } from './components/sat-figure-b2/sat-figure-b2.component';
import { SatFigureB1Component } from './components/sat-figure-b1/sat-figure-b1.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    IntroduceComponent,
    LawDocumentComponent,
    RegisterComponent,
    TheoryTestComponent,
    SatFigureB2Component,
    SatFigureB1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
