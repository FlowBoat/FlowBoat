import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { FlowiPageComponent } from './pages/flowi-page/flowi-page.component';
import { BloombudPageComponent } from './pages/bloombud-page/bloombud-page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'Flowi', pathMatch: 'full', component: FlowiPageComponent },
  { path: 'BloomBud', pathMatch: 'full', component: BloombudPageComponent },
  { path: '404', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
