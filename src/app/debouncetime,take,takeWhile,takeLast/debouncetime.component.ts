import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable, debounceTime, elementAt, filter, first, from, last, of, take, takeLast, takeWhile } from 'rxjs';

@Component({
  selector: 'app-debouncetime',
  templateUrl: './debouncetime.component.html',
  styleUrls: ['./debouncetime.component.css']
})
export class DebouncetimeComponent implements OnInit {
  searchForm!: FormGroup
  search!: FormControl

  categories: any[] = ['shirt', 'shoes', 'ornaments', 'jeans', 'sandels']
  categoryies$ = from(this.categories)
  constructor(private formBuiler: FormBuilder) {

  }
  ngOnInit(): void {
    this.searchForm = this.formBuiler.group({
      search: ['']
    })

    // this.takeLastOperator()
    // this.searchForm.get('search')?.valueChanges.subscribe((res:any)=>{

    //   console.log(res)
    // })

    // need to make too much of api calla to aoid that we can use debounce time

    this.searchForm.get('search')?.valueChanges.pipe(
      // take(2),
      // takeLast(2),
      takeWhile((val) => this.checkCondition(val)),
      debounceTime(1000)
    ).subscribe((res: any) => {
      console.log(res, 'res')
    })

    // this.takeLastOperator()
    // this.firstOperator()
    // this.lastOperator()
    this.elemetAtOperator()

  }

  checkCondition(value: any) {
    console.log(value)
    return value.length < 5 ? true : false
  }

  takeLastOperator() {
    this.categoryies$.pipe(takeLast(2)).subscribe((res: any) => {

      console.log(res)
    })
  }

  firstOperator() {
    this.categoryies$.pipe(first()).subscribe((res: any) => {
      console.log(res)
    })
  }

  lastOperator() {
    this.categoryies$.pipe(last()).subscribe((res: any) => {
      console.log(res)
    })
  }

  elemetAtOperator() {
    this.categoryies$.pipe(elementAt(3)).subscribe((res: any) => {
      console.log(res)
    })
  }


  filterOperator() {
    this.searchForm.get('search')?.valueChanges.pipe(
      filter((v) => this.checkCharCount(v))
    ).subscribe((res: any) => {
      console.log(res, 'res')
    })
  }

  checkCharCount(value: any) {
    return value.length < 4 ? true : false
  }
}
