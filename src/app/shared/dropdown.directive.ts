import { Directive, OnInit, HostListener, HostBinding, ElementRef, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {
    @HostBinding('class.open') isOpen = false;
    
    @HostListener('click') toggleOpen() {
        this.isOpen = !this.isOpen;
    }

    constructor(private elRef: ElementRef, private renderer: Renderer2) { }
    ngOnInit() {

    }
}