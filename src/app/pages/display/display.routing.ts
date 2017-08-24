import {RouterModule, Routes} from '@angular/router';
import {DisplayMainPageComponent} from './components/display-main-page/display-main-page.component';
const routes: Routes = [
  {
    path: '', component: DisplayMainPageComponent
  }
];

export const displayRouting = RouterModule.forChild(routes);
