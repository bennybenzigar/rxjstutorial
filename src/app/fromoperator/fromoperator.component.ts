import { Component , OnInit} from '@angular/core';
import { Observable, from } from 'rxjs';

@Component({
  selector: 'app-fromoperator',
  templateUrl: './fromoperator.component.html',
  styleUrls: ['./fromoperator.component.css']
})
export class FromoperatorComponent implements OnInit{

  // from opoeator 
  fromArray:Observable<string> = from(['name', 'age'])
  fromString:Observable<string>=from('aiden')

   promise =new Promise<string>(
    resolve=>{
      setTimeout(()=>{
        resolve('resolved from promise'),1000
      })
    }
   )
   observablepromise$=from(this.promise)
constructor(){}
  ngOnInit(): void {
      // from - array

    this.fromArrayrxjs()
// from string
    this.fromStringxjs()
// from promis
this.frompromise()
  }

  fromArrayrxjs(){
    this.fromArray.subscribe((res:any)=>{
      console.log(res)
    })
  }
  
  fromStringxjs(){
this.fromString.subscribe((res:any)=>{
  console.log(res)})
  }

frompromise(){
  this.observablepromise$.subscribe((res:any)=>{
    console.log(res)
  })
}
}
