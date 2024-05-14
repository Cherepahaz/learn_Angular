import { Component } from '@angular/core';

interface ICalcGroup {
  first: ICalcVar;
  second: ICalcVar;
  operation: CalcOperation;
}

interface ICalcVar {
  value: number;
  modificator: CalcModifiers;
}

enum CalcOperation {
  plus = "+",
  minus = "-",
  multiply = "*",
  divide = "/"
}

enum CalcModifiers {
  none = "none",
  sin = "sin",
  cos = "cos",
  square = "square"
}


@Component({
  selector: 'app-my-calculator',
  //standalone: true,
  //imports: [],
  templateUrl: './my-calculator.component.html',
  styleUrl: './my-calculator.component.scss'
})
export class MyCalculatorComponent {

  public calcOperations = CalcOperation;
  public calcModifiers = CalcModifiers;
  public calcGroups: ICalcGroup[] = [{
    first: {
      value: 5,
      modificator: CalcModifiers.none
    },
    second: {
      value: 5,
      modificator: CalcModifiers.none
    },
    operation: CalcOperation.plus
  }];

  public history: string[] = [];

  public operationsBetweenGroups: CalcOperation[] = [];

  public result: number | undefined = undefined; // result?: number;

  public addGroup(): void {
    this.calcGroups.push({
      first: {
        value: 0,
        modificator: CalcModifiers.none
      },
      second: {
        value: 0,
        modificator: CalcModifiers.none
      },
      operation: CalcOperation.plus
    })

    this.operationsBetweenGroups.push(CalcOperation.plus)
  }

  public removeGroup(index: number): void {
    this.calcGroups.splice(index, 1);
    this.operationsBetweenGroups.splice(index - 1, 1);
  }

  public calcGroup() {
    let result = 0
    let tempHistory: string[] = [];

    this.calcGroups.forEach((group, i) => {
      if (i == 0) {
        result = this.calc(this.calcValueWithModif(group.first), this.calcValueWithModif(group.second), group.operation);
      } else {
        let tempResult = this.calc(this.calcValueWithModif(group.first), this.calcValueWithModif(group.second), group.operation);
        result = this.calc(result, tempResult, this.operationsBetweenGroups[i - 1])
      }
      tempHistory.push(
        `
      (
        ${group.first.modificator != CalcModifiers.none ? group.first.modificator : ''} ${group.first.value}
        ${group.operation}
        ${group.second.modificator != CalcModifiers.none ? group.second.modificator : ''} ${group.second.value}
      )
      `)
    })

    tempHistory.push(` = ${result}`);
    this.history.push(tempHistory.join(' '));

    this.result = result;
  }

  public calcValueWithModif(value: ICalcVar): number {
    switch (value.modificator) {
      case CalcModifiers.none:
        return value.value;
      case CalcModifiers.cos:
        return Math.cos(value.value);
      case CalcModifiers.sin:
        return Math.sin(value.value);
      case CalcModifiers.square:
        return Math.pow(value.value, 2);
    }
  }

  public calc(first: number, second: number, operation: CalcOperation): number {
    switch (operation) {
      case CalcOperation.plus:
        return first + second;
      case CalcOperation.minus:
        return first - second;
      case CalcOperation.multiply:
        return first * second;
      case CalcOperation.divide:
        return first / second;
    }
  }

  public clearHistory() {
    this.history.length = 0;
  }
}
