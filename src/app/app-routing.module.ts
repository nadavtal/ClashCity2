import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayersComponent } from './players/players.component';
import { DetailsComponent } from './details/details.component'
import { BattlesComponent } from './battles/battles.component'

const routes: Routes = [
  {
    path: '',
    component: PlayersComponent
  },
  {
    path: 'details/:id',
    component: DetailsComponent
  },
  {
    path: 'battles',
    component: BattlesComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
