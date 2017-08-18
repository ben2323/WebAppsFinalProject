import {RouterModule, Routes} from "@angular/router";
import {AdminMainPageComponent} from "./components/admin-main-page/admin-main-page.component";
const routes: Routes = [
  {
    path: '', component: AdminMainPageComponent
  }
];

export const adminRouting = RouterModule.forChild(routes);
