import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BannerComponent } from './components/banner/banner.component';
import { SectionComponent } from './components/section/section.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ArticleComponent } from './components/gallery/article/article.component';


@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    SectionComponent,
    GalleryComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
