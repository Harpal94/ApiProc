import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentAPIComponent } from './student-api/student-api.component';
import { InsertstudentApiComponent } from './student-api/insertstudent-api/insertstudent-api.component';
import { UpdtestudentApiComponent } from './student-api/updtestudent-api/updtestudent-api.component';


const routes: Routes = [
  { path: '', redirectTo: '/studentlist', pathMatch: 'full' },
  { path: 'studentlist', component: StudentAPIComponent },
  { path: 'studentinsert', component: InsertstudentApiComponent },
  { path: 'Updatestudent/:id', component: UpdtestudentApiComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [StudentAPIComponent, InsertstudentApiComponent, UpdtestudentApiComponent]
