import { Directive, OnInit, HostListener, HostBinding, ElementRef, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {
    @HostBinding()

    @HostListener()

    constructor(private elRef: ElementRef, private renderer: Renderer2) { }
    ngOnInit() {

    }
}