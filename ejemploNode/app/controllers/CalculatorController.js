const CalculatorModel = require('../models/CalculatorModel');
class CalculatorController{
    addition(req, res){
        let params = req.body;
        let n1 = params.number1;
        let n2 = params.number2;
        let calculator = new CalculatorModel;
        let response = calculator.addition(n1,n2);
        res.send({"response": response});
    }
}
module.exports = CalculatorController;