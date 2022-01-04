import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-harshit-assignment',
  templateUrl: './harshit-assignment.component.html',
  styleUrls: ['./harshit-assignment.component.css']
})
export class HarshitAssignmentComponent implements OnInit {
  product:any={};
  products:any=[]
  productkeys:any=[]
  popularity:any=[]
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getData();
  }
  getData(){
    let urlin="https://s3.amazonaws.com/open-to-cors/assignment.json"
    this.http.get(urlin).subscribe((data:any)=>{
      console.log(data) // data check
      this.product=data.products;
      var count=0; 
      this.productkeys=Object.keys(this.product); // making nested objects as key
      for(let key in data.products){
        count++;
        data.products[key].id=key;
        this.products.push(data.products[key]) // making an array where key is 6884 and data is the whole object inside it
        if(count == Number(Object.keys(data.products).length)){ // checking till last iteration
          this.products.sort((a:any,b:any)=>Number(b.popularity)-Number(a.popularity))
        //sorting the array 
        console.log(this.products)
        }
      }
    })
  }

}
