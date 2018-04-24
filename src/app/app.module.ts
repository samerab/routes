import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



import { AppComponent } from './app.component';
import { CustomersComponent } from './customers/customers.component';
import { OrdersComponent } from './orders/orders.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { FilterPipe } from './filter.pipe';
import { MystyleDirective } from './mystyle.directive';


// const routes: Routes = [
//   {path: 'customers', component: CustomersComponent},
//   {path: 'orders', component: OrdersComponent, outlet: 'details'},
  
//   {path: '', redirectTo: '/customers', pathMatch: 'full'},
//   {path: '**', component: NotfoundComponent},
// ]; 

const routes: Routes = [
  // {
  //     path: 'customers',
  //     children: [
  //       {
  //         path: '', 
  //         component: CustomersComponent
  //       },
  //       {
  //         path: ':id',
  //        component: OrdersComponent
  //       }
  //     ]
  //  },


      {
        path: 'orders', component: OrdersComponent, outlet: 'details'},

        {
          path: 'customers',
          component: CustomersComponent,
          children: [
            {
              path: '',
             component: NotfoundComponent
            },
            {
              path: ':id',
             component: OrdersComponent
            }
          ]
       },

  
  {path: '', redirectTo: '/customers', pathMatch: 'full'},
  {path: '**', component: NotfoundComponent},
]; 



@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    OrdersComponent,
    NotfoundComponent,
    FilterPipe,
    MystyleDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
