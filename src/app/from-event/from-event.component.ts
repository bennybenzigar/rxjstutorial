import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.css']
})
export class FromEventComponent implements OnInit {
  @ViewChild('validate', { static: true }) validate!: ElementRef;
  @ViewChild('linkdata', { static: true }) linkdata!: ElementRef;
  
 
  constructor() { }
  ngOnInit(): void {
   
  
    this.rxjsfromevent()
  this.fromEventlink()
    
  }


  rxjsfromevent() {
    const viewchildObservable$ = fromEvent(this.validate?.nativeElement, 'click')
    viewchildObservable$.subscribe((res: any) => {
      console.log(res, 'button clicked')
    })
   
  }

  fromEventlink(){
    const observableFromLink$ = fromEvent(this.linkdata?.nativeElement, 'mouseover')

    observableFromLink$.subscribe((data: any) => {
      console.log(data)
    })
  }
}
