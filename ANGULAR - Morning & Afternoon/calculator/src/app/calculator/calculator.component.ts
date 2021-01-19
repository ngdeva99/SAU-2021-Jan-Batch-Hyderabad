import { Component, OnInit } from '@angular/core';
import { CalculatorService } from './../services/calculator.service';
@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  constructor(private calc:CalculatorService) { }

  ngOnInit(): void {
  }


  title = 'calculator';

  public num1 :number = 0;
  public num2 : number = 0;
  public result:number = 0;
  
     add(a : number,b : number){
      this.result =  this.calc.add(this.num1,this.num2);
    }
  
    subtract(a : number,b : number){
      this.result = this.calc.subtract(this.num1,this.num2);
    }
  
    multiply(a : number,b : number){
      this.result = this.calc.multiply(this.num1,this.num2);
    }
  
    division(a : number,b : number){
      this.result = this.calc.division(this.num1,this.num2);
    }


}
