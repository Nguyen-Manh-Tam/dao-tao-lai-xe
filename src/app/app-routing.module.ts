import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { IntroduceComponent } from './components/introduce/introduce.component';
import { LawDocumentComponent } from './components/law-document/law-document.component';
import { RegisterComponent } from './components/register/register.component';
import { SatFigure1Component } from './components/sat-figure-1/sat-figure-1.component';
import { SatFigure2Component } from './components/sat-figure-2/sat-figure-2.component';
import { TheoryTestComponent } from './components/theory-test/theory-test.component';

const routes: Routes = [
  { path: 'admin', component: AdminComponent },
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'sat-figure-1', component: SatFigure1Component },
  { path: 'sat-figure-2', component: SatFigure2Component },
  { path: 'theory-test', component: TheoryTestComponent },
  { path: 'law-document', component: LawDocumentComponent },
  { path: 'introduce', component: IntroduceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
