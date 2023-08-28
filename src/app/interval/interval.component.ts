import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, from, interval } from 'rxjs';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.css']
})
export class IntervalComponent implements OnInit{
  data  = ['alan', 'alwin', 'arshad']

constructor(){}
ngOnInit(): void {
  const observable$ =from(this.data)

  observable$.subscribe((data:any)=>{

    const intervalData$= interval(2000)
    intervalData$.subscribe((res:any)=>{
      console.log(res+data)
    })
  })
}

}
