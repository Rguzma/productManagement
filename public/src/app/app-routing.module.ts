import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { NotesDetailsComponent } from './notes-details/notes-details.component';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [{
  path:'products',
  component:ProductsComponent, children:[
    {
      path:'edit/:_id',
      component:NotesDetailsComponent
    },
    {
      path:'create',
      component:EditComponent
    },


  ],
},


{
  path:'',
  pathMatch:'full',
  component:AppComponent
},
{
  path:'**',
  component: PageNotFoundComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
