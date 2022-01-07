class CPF{
    constructor(cpfNumber){
        this.cpfNumber = cpfNumber;

        this.validationProcess();
    }

    validationProcess(){
        if(!this.cpfNumber || "") return false;

        const cpfArray = this.getArray();
        const utilNumbers = this.getUtilNumbers(cpfArray);

        if(cpfArray.length < 11) return  false;
        if(cpfArray[0].toString().repeat(cpfArray.length) === this.cpfNumber.replace(/\D+/g, '')) return false;

        const firstNumber = this.getFirstNumber(utilNumbers);
        utilNumbers.push(firstNumber);
        const secondNumber = this.getSecondNumber(utilNumbers);
        utilNumbers.push(secondNumber);

        if(firstNumber === cpfArray[9] && secondNumber === cpfArray[10]) return true;
    }

    getArray(){
        const cleanCpfNumber = this.cpfNumber.replace(/\D+/g, '');
        const arraycleanCpfNumber = cleanCpfNumber.split('');
        return arraycleanCpfNumber.map(value => Number(value));
    }

    getUtilNumbers (cpfArray) {
    const arrayNumber = cpfArray.map(value => Number(value)).slice(0, -2);
    return arrayNumber
    }

    getFirstNumber(utilNumbers){
        let arraySize = utilNumbers.length +1;
            const preArrayCalc = utilNumbers.map((value) => value * (arraySize--)).reduce(function(acumulator, value){
                acumulator += value
                return acumulator;
        });
    
        let firstNumber = 11 - (preArrayCalc % 11);
        if(firstNumber > 9){
           return firstNumber = 0;
        }
        return firstNumber;
    }

    getSecondNumber(utilNumbers){
        let arraySize = utilNumbers.length +1;
        const preArrayCalc = utilNumbers.map((value) => value * (arraySize--)).reduce(function(acumulator, value){
            acumulator += value
            return acumulator;
        });
    
        let secondNumber = 11 - (preArrayCalc % 11);
    
        if(secondNumber > 9){
            return secondNumber = 0;
        }

        return secondNumber;
    }
}