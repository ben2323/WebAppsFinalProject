import {RouterModule, Routes} from "@angular/router";
import {StatsMainPageComponent} from "./components/stats-main-page/stats-main-page.component";
const routes: Routes = [
  {
    path: '', component: StatsMainPageComponent
  }
];

export const statsRouting = RouterModule.forChild(routes);
