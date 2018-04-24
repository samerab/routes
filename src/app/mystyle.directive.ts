import { Directive, Renderer2, ElementRef, OnInit, HostListener,Input } from '@angular/core';

@Directive({
  selector: '[appMystyle]'
})
export class MystyleDirective implements OnInit {

  constructor(private elm:ElementRef, private renderer: Renderer2) { }


  ngOnInit(){
   
  }
  @Input() bg: string = 'red';

@HostListener('mouseenter') Sam(event: Event){
 this.renderer.setStyle(this.elm.nativeElement,'background-color',this.bg);
    this.renderer.setStyle(this.elm.nativeElement,'color','#ffffff');
}

@HostListener('mouseleave') sss(event: Event){
  this.renderer.setStyle(this.elm.nativeElement,'background-color','green');
     this.renderer.setStyle(this.elm.nativeElement,'color','#ffffff');
 }

}
