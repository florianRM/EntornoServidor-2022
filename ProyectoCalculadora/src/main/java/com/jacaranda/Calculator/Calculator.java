package com.jacaranda.Calculator;

public class Calculator {
	private int numberA;
	private int numberB;
	
	public Calculator(int numberA, int numberB) {
		this.numberA = numberA;
		this.numberB = numberB;
	}
	
	private void numberComprobation(int number) throws CalculatorException {
		if(number == 0) {
			throw new CalculatorException("No se puede dividir entre 0");
		} else if(number < 0) {
			throw new CalculatorException("No se puede dividir con un número negativo");
		}
	}
	
	public double plus() {
		return this.numberA + this.numberB;
	}
	
	public double subtract() {
		return this.numberA - this.numberB;
	}
	
	public double multiply() {
		return this.numberA * this.numberB;
	}
	
	public int divide() throws CalculatorException {
		numberComprobation(numberA);
		numberComprobation(numberB);
		
		return numberA / numberB;
	}

	public int getNumberA() {
		return numberA;
	}

	public void setNumberA(int numberA) {
		this.numberA = numberA;
	}

	public int getNumberB() {
		return numberB;
	}

	public void setNumberB(int numberB) {
		this.numberB = numberB;
	}

	@Override
	public String toString() {
		return "Calculator [numberA=" + numberA + ", numberB=" + numberB + "]";
	}
	
}
