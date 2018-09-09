import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LocationResolver } from './resolver/location.resolver';

const routes: Routes = [
	{
		path: '', 
		redirectTo:'/courses', 
		pathMatch: 'full'
	},{
		path:'courses',
		component: CourseListComponent
	},{
		path:'courses/:slug',
		component: CourseDetailComponent,
		resolve:{
			location: LocationResolver
		}
	},
	{
		path:'**',
		component: PageNotFoundComponent
	}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [CourseListComponent,CourseDetailComponent, PageNotFoundComponent]