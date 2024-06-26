import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  @ViewChild('display') display!: ElementRef;
  @ViewChild('first') first!: ElementRef;
  @ViewChild('second') second!: ElementRef;

  result: number = 0;

  num(op: any){
   let firstvalue = parseFloat(this.first.nativeElement.value);
   let secondvalue = parseFloat(this.second.nativeElement.value);

    if (op === '+'){
      this.result = firstvalue + secondvalue;
      this.display.nativeElement.innerHTML = `Result: ${this.result}`;
    } else if (op === '-'){
      this.result = firstvalue - secondvalue;
      this.display.nativeElement.innerHTML = `Result: ${this.result}`;
    } else if (op === '*'){
      this.result = firstvalue * secondvalue;
      this.display.nativeElement.innerHTML = `Result: ${this.result}`;
    } else if (op === '%'){
      this.result = firstvalue % secondvalue;
      this.display.nativeElement.innerHTML = `Result: ${this.result}`;
    }
    

  }
}
