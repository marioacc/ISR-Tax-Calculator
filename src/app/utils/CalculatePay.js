
/**
 * Created by mario on 5/12/2016.
 */
var moment= require("moment");
var ISR = require("./IsrCalculator");
var IMSS = require("./ImssPayment");
var jade = require("jade");

module.exports={
    calculatePay:function (employee, absences,salary,period) {
        var workedDays = calculateWorkedDays(employee.workingDays,absences);
        var netPay = calculateNetPay(workedDays,salary);
        var isr =ISR.calculateISR(salary,absences,period).toFixed(2)    ;
        var seniority= (moment().subtract(employee.hiringDate.getFullYear(),"years")).year();
        var imss =IMSS.calculateImss(salary,workedDays,seniority).toFixed(2);
        var payment= netPay-imss-isr;
        var htmlForPdf= jade.renderFile(__dirname+"/roster.jade",{
            netPay:netPay,
            employee:employee,
            ISR: isr,
            IMSS: imss,
            total: payment
        });
        return htmlForPdf;

    }

};
function calculateWorkedDays(period,absences){
    "use strict";
    return period-absences;
}

function calculateNetPay(workedDays,salary){
    "use strict";
    return workedDays*salary;
}

