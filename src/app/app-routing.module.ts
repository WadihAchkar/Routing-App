import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { StudentComponent } from './student/student.component';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import { ChildaComponent } from './childa/childa.component';
import { ChildbComponent } from './childb/childb.component';
import { myGuard } from './my-guard.guard';

const routes: Routes =
[
  {path:'', component: FirstComponent},
  {path:'first-component', component: FirstComponent, canActivate: [myGuard],

  children: [
    {
      path: 'child-a',
      component: ChildaComponent,
    },
    {
      path: 'child-b',
      component: ChildbComponent,
    },
  ],

  },
  {path:'second-component', component: SecondComponent},
  {path:'student', component:StudentComponent},
  {path:'studentdetails/:id', component:StudentdetailsComponent},
  {path:'**', component: NotFoundComponent},
  // {path:'', component:}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
