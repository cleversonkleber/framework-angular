import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appInputColor]',
  exportAs: 'inputColor'
})
export class InputColorDirective {
  @Input() corUsuario = 'gray';
  @HostBinding('style.backgroundColor') cor: string="";
  constructor() {
  }
  @HostListener('focus') comFoco(){
    this.cor = this.corUsuario;

  }

    @HostListener('blur') semFoco(){
      this.cor = "transparent";

  }

}
