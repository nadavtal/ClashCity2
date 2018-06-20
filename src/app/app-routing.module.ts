import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayersComponent } from './players/players.component';
import { DetailsComponent } from './details/details.component';
import { BattlesComponent } from './battles/battles.component';
import { HomeComponent } from './home/home.component';
import { UserHomeComponent } from './user-home/user-home.component'

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'details/:id',
    component: DetailsComponent
  },
  {
    path: 'user-home',
    component: UserHomeComponent
  },
  {
    path: 'battles',
    component: BattlesComponent
  },
  {
    path: 'players',
    component: PlayersComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
