import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit {
// of opearator make observables from a string array on object
  rxjs!: Observable<any>
  names!: string
  studentsArray = ['alan', 'alex', 'jobin']
  student$: Observable<string[]> = of(this.studentsArray)
  ofstrings$: Observable<string> = of('anandhu')
  // studentObject={
  //   name:'arun'
  // }
  ofObject$: Observable<any> = of({
    name: 'anu',
    age: 24
  })
  constructor() { }
  ngOnInit(): void {

    //     this.rxjs = new Observable(
    //       function (observer) {
    //         try {
    //           observer.next('ram'),
    //             observer.next('alan')
    //         }
    //         catch (e) {
    //           observer.error(e)

    //         }
    //       }
    //     )

    //     this.rxjs.subscribe((res:any)=>{
    // console.log(res)
    // this.names=res

    //     })

    //  #5 - Of Operator-
    //5.1 of observable with array
    this.ofArray()
    //5.2 of observable with string
    this.ofString()
    // 5.3 of observable with object
  this.ofObject()
  }

  ofArray() {
    this.student$.subscribe((res: any) => {
      console.log(res)
    })
  }


  ofString() {
    this.ofstrings$.subscribe((res: any) => {
      console.log(res)
    })
  }

  ofObject(){
    this.ofObject$.subscribe((data:any)=>{
      console.log(data)
    })
  }

  
}
