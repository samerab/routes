import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
@ViewChild('samer') sam;
aa = 'test;'
customers: any[] = [
  {id: 1, name: 'Samer'},
  {id: 2, name: 'Raghad'},
  {id: 3, name: 'Ferial'},
  {id: 4, name: 'Ammar'},
];

customers1: any[] = [
  {id: 1, name: 'Samer', last: 'ramheed'},
  {id: 2, name: 'Raghad', last: 'samia'},
  {id: 3, name: 'Ferial', last: 'rasheed'},
  {id: 4, name: 'Ammar', last: 'rasheed'},
];

x;
currentCustomerId: number;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe( paramMap => this.currentCustomerId = +paramMap.get('id'));

  }

  style(id){
    return {'btn-danger': this.isMatch(id), 'btn-link': !this.isMatch(id)};
  } 

  getOrders(e: KeyboardEvent, id){
    this.router.navigate(['customers', id]);
    this.currentCustomerId = id;
    console.log(this.sam.nativeElement.value);
    this.x = this.sam.nativeElement.value
  }

  isMatch(id){
    return id === this.currentCustomerId;
  }

  change(){
    alert('kll');
  }

}
