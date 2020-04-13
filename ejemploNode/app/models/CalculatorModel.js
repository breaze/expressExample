class CalculatorModel{
    addition(n1, n2){
        let res = Number(n1) + Number(n2);
        return res;
    }
    subtraction(n1,n2){
        let res = Number(n1) - Number(n2);
        return res;
    }
}
module.exports = CalculatorModel;