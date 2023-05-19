import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePagesComponent } from './pages/home-pages/home-pages.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';

@NgModule({
  declarations: [HomePagesComponent, AboutPageComponent, SidebarComponent, ContactPageComponent, SearchBoxComponent ],
  imports: [CommonModule,RouterModule],
  exports: [HomePagesComponent,AboutPageComponent,SidebarComponent,ContactPageComponent,SearchBoxComponent],
})
export class SharedModule {}
