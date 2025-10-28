export type Operation = '+' | '-' | '×' | '÷';

export type CalculatorState = {
  display: string;
  previousValue: number | null;
  operation: Operation | null;
  waitingForOperand: boolean;
};

export type HistoryEntry = {
  id: string;
  expression: string;
  result: number;
  timestamp: Date;
};
