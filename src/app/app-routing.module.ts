import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FastgamemodeComponent } from './fastgamemode/fastgamemode.component';
import { MainaimtraningComponent } from './mainaimtraning/mainaimtraning.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { ReactiontestComponent } from './reactiontest/reactiontest.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {path:`mainpage`, component:MainpageComponent},
  {path:`mainaim`, component:MainaimtraningComponent},
  {path:`fastaim`, component:FastgamemodeComponent},
  {path:`reactiontest`, component:ReactiontestComponent},
  {path:`pokemon`, component:TestComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
