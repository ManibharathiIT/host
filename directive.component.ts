import { Directive, HostListener, Input ,HostBinding} from "@angular/core";
import { ElementRef } from '@angular/core';
@Directive({
    selector:'[highlight]'
})

export class HighLight{
    @Input('highlight') hostColor:any;
    constructor(private eleRef:ElementRef){     
    }
    @HostBinding('style.color') 
    color='pink'
    @HostListener('mouseenter') over(){
       this.eleRef.nativeElement.style.color=this.hostColor;
    }
    @HostListener('mouseleave') leave(){
        this.eleRef.nativeElement.style.color=this.hostColor;
     }
     @HostListener('click') click(){
        this.eleRef.nativeElement.style.color=this.hostColor;
     }
}