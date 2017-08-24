import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const APP_ROUTES: Routes = [
  {path: 'admin', loadChildren: './pages/admin/admin.module#AdminModule'},
  {path: 'map', loadChildren: './pages/map/map.module#MapModule'},
  {path: 'display', loadChildren: './pages/display/display.module#DisplayModule'},
  {path: 'stats', loadChildren: './pages/stats/stats.module#StatsModule'},
  { path: '**', redirectTo: '/display', pathMatch: 'full' },
];

export const APP_ROUTING: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES, {useHash: false, initialNavigation: true});
