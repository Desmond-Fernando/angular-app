import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit,
  Component, ContentChild, DoCheck, ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges, ViewChild
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit,
  OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit,
  AfterViewChecked, OnDestroy{

  // @Input('serverElement') element: {type: string, name: string, content: string}
  @Input() element: {type: string, name: string, content: string}
  @Input() name: string;
  @ViewChild('header', {static: true}) header: ElementRef;
  @ContentChild('paragraphContent', {static: true}) paragraph: ElementRef;

  constructor() {
    console.log('constructor called!');
  }

  ngOnInit() {
    console.log('ngOnInit called!');
    console.log('Header content + ' + this.header.nativeElement.textContent);
    console.log('Paragraph content + ' + this.paragraph.nativeElement.textContent);
  }

  ngOnChanges(changes:SimpleChanges): void {
    // console.log('ngOnChanges called!');
    // console.log(changes);
  }

  ngDoCheck() {
    // console.log('ngDoCheck called!');
  }
  ngAfterContentInit() {
    // console.log('ngAfterContentInit called!');
    // console.log('Paragraph content + ' + this.paragraph.nativeElement.textContent);
  }
  ngAfterContentChecked() {
    // console.log('ngAfterContentChecked called!');
  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit called!');
    console.log('Header content + ' + this.header.nativeElement.textContent);
  }
  ngAfterViewChecked() {
    // console.log('ngAfterViewChecked called!');
  }
  ngOnDestroy() {
    console.log('ngOnDestroy called!');
  }

}
