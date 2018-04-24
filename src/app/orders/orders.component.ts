import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { slideInDownAnimation } from '../animations';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
  animations: [ slideInDownAnimation ]
})
export class OrdersComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  //@HostBinding('style.position')  position = 'absolute';

  customerId:number = null;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router            
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe( paramMap => this.customerId = +paramMap.get('id'));
  }

  goBack(){
    this.router.navigate(['/customers',{id: this.customerId}])
  }

  openPrevious(){
    this.router.navigate(['/customers', this.customerId-1])
  }

}
