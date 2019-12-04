import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'dashboard',
    loadChildren: () => import('./student/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./accountant/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./teacher/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./librarian/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./receptionist/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'result',
    loadChildren: () => import('./student/result/result.module').then( m => m.ResultPageModule)
  },  {
    path: 'homework',
    loadChildren: () => import('./student/homework/homework.module').then( m => m.HomeworkPageModule)
  },
  {
    path: 'application',
    loadChildren: () => import('./student/application/application.module').then( m => m.ApplicationPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
