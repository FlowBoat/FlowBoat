import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BannerComponent } from './components/banner/banner.component';
import { ServicesComponent } from './components/services/services.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { TeamComponent } from './components/team/team.component';
import { QuotesComponent } from './components/quotes/quotes.component';
import { BlogComponent } from './components/blog/blog.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { Nl2BrPipe } from './pipes/nl2br.pipe';
import { HomeComponent } from './pages/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    ServicesComponent,
    PresentationComponent,
    ProjectsComponent,
    TeamComponent,
    QuotesComponent,
    BlogComponent,
    FooterComponent,
    AboutComponent,
    Nl2BrPipe,
    HomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
