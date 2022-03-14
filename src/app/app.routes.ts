import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './nav/home/home.component';
import { NotFoundComponent } from './nav/not-found/not-found.component';
import { WatchedFilmDashboardComponent } from './films/components/watched-film-dashboard/watched-film-dashboard.component';
import { WishFilmDashboardComponent } from './films/components/wish-film-dashboard/wish-film-dashboard.component';

const rootRouterConfig: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    {
        path: 'movies',
        loadChildren: () => import('./films/fillm.module')
            .then(m => m.FilmModule)
    },
    { path: 'watched-movies', component: WatchedFilmDashboardComponent },
    { path: 'wish-movies', component: WishFilmDashboardComponent },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(rootRouterConfig, { enableTracing: false })
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
