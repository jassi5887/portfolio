import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CoverComponent } from './cover/cover.component';
import { AngularComponent } from './angular/angular.component';
import { NodeComponent } from './node/node.component';
import { TimelineComponent } from './timeline/timeline.component';

const appRoutes: Routes = [
  { path: 'home', redirectTo: '/', pathMatch: 'full' },
  { path: 'cover', component: CoverComponent },
  { path: 'angular', component: AngularComponent },
  { path: 'nodejs', component: NodeComponent },
  { path: 'timeline', component: TimelineComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}