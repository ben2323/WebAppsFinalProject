import {RouterModule, Routes} from '@angular/router';
import {MapComponent} from './components/map-main-page/map-main-page.component';
const routes: Routes = [
  {
    path: '', component: MapComponent
  }
];

export const mapRouting = RouterModule.forChild(routes);
