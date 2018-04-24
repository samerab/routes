import { Component,QueryList, ViewChildren, ViewChild, ElementRef } from '@angular/core';
import { CustomersComponent } from './customers/customers.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //directives: [CustomersComponent]
})
export class AppComponent {
  title = 'app';
  @ViewChildren(CustomersComponent) ch: QueryList<CustomersComponent>;
  @ViewChildren(ElementRef) hone: QueryList<ElementRef>;

  go(){
    this.ch.first.customers.splice(1,1,{id: 666666, name: 'www'});
    this.ch.last.customers.splice(1,1,{id: 666666, name: 'zzz'});
    console.log(this.hone);
    this.hone.last.nativeElement.value = 'fff';
  }
}
