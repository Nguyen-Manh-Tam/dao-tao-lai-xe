import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { IntroduceComponent } from './components/introduce/introduce.component';
import { LawDocumentComponent } from './components/law-document/law-document.component';
import { RegisterComponent } from './components/register/register.component';
import { SatFigureB1Component } from './components/sat-figure-b1/sat-figure-b1.component';
import { SatFigureB2Component } from './components/sat-figure-b2/sat-figure-b2.component';
import { TheoryTestComponent } from './components/theory-test/theory-test.component';

const routes: Routes = [
  { path: 'admin', component: AdminComponent },
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'sat-figure-b1', component: SatFigureB1Component },
  { path: 'sat-figure-b2', component: SatFigureB2Component },
  { path: 'theory-test', component: TheoryTestComponent },
  { path: 'law-document', component: LawDocumentComponent },
  { path: 'introduce', component: IntroduceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
