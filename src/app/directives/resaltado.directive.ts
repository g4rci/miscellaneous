import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {
  
  constructor( private el:ElementRef) { 
    console.log("directive called")
    //el.nativeElement.style.backgroundColor = "yellow"
  }
  
   @Input("appResaltado") nuevoColor: string = "";

   @HostListener('mouseenter') mouseEntro(){
    this.resaltar( this.nuevoColor || 'yellow' );
   }

   @HostListener('mouseleave') mouseSale(){
    this.resaltar( "" );
   }

   private resaltar( color: string){
    this.el.nativeElement.style.backgroundColor = color;
   }

}
