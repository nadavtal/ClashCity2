import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { VideosComponent } from './videos/videos.component';
import { FooterComponent } from './footer/footer.component';
import { SideUnitsMenuComponent } from './side-units-menu/side-units-menu.component';
import { VideoRcommendationsComponent } from './video-rcommendations/video-rcommendations.component';
import { CarousellComponent } from './carousell/carousell.component';
import { PlayersComponent } from './players/players.component';
import { DetailsComponent } from './details/details.component';
import { BattlesComponent } from './battles/battles.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserNavComponent } from './user-nav/user-nav.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PlayersComponent,
    DetailsComponent,
    BattlesComponent,
    HomeComponent,
    PageHeaderComponent,
    VideosComponent,
    FooterComponent,
    SideUnitsMenuComponent,
    VideoRcommendationsComponent,
    CarousellComponent,
    UserHomeComponent,
    UserNavComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
