import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { WellcomeComponent } from './components/wellcome/wellcome.component';

const routes: Routes = [
  { path: '', component: HomeComponent,
    children: [
      {
        path: '',
        component: WellcomeComponent
      },
      {
        path: 'user',
        loadChildren: () => import('../user/user.module').then(m => m.UserModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
