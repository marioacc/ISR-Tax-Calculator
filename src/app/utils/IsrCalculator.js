/**
 * Created by mario on 5/12/2016.
 */

module.exports ={
    calculateISR:function(salary,absences,period){
        "use strict";
        var periodIncome = salary*(period-absences);
        var isrTableToUse;
        var variableFee;
        var ISRTax;
        switch (period){
            case 7:
                isrTableToUse=ISRTableWeekly;
                break;
            case 15:
                isrTableToUse=ISRTableBiweekly;
                break;
            default:
                isrTableToUse=ISRTableMonthly;
                break;
        }
        var ISRDataForCalculations =isrTableToUse.find(function(element,index,isrTable){
            var upperLimit = element.upperLimit || periodIncome*2;
            return element.lowerLimit<= periodIncome && periodIncome <= upperLimit ;
        });
        variableFee = (periodIncome-ISRDataForCalculations.lowerLimit)*
            (ISRDataForCalculations.percentForLowerLimit/100);

        ISRTax=variableFee+ISRDataForCalculations.fixedFee;

        return ISRTax
    }  
};

var ISRTableWeekly=[
    {
        "lowerLimit": 0.01,
        "upperLimit": 114.24,
        "fixedFee": 0,
        "percentForLowerLimit": 1.92
    },
    {
        "lowerLimit": 114.25,
        "upperLimit": 969.5,
        "fixedFee": 2.17,
        "percentForLowerLimit": 6.4
    },
    {
        "lowerLimit": 969.51,
        "upperLimit": 1703.80,
        "fixedFee": 56.91,
        "percentForLowerLimit": 10.88
    },
    {
        "lowerLimit": 1703.81,
        "upperLimit": 1980.58,
        "fixedFee": 136.85,
        "percentForLowerLimit": 16
    },
    {
        "lowerLimit": 1980.59,
        "upperLimit": 2371.32,
        "fixedFee": 181.09,
        "percentForLowerLimit": 17.92
    },
    {
        "lowerLimit": 2371.33,
        "upperLimit": 4782.61,
        "fixedFee": 251.16,
        "percentForLowerLimit": 21.36
    },
    {
        "lowerLimit": 4782.62,
        "upperLimit": 7538.09,
        "fixedFee": 766.15,
        "percentForLowerLimit": 23.52
    },
    {
        "lowerLimit": 7538.10,
        "upperLimit": 14391.44,
        "fixedFee": 1414.28,
        "percentForLowerLimit": 30
    },
    {
        "lowerLimit": 14391.45,
        "upperLimit": 19188.61,
        "fixedFee": 3470.25,
        "percentForLowerLimit": 32
    },
    {
        "lowerLimit": 19188.62,
        "upperLimit": 57565.76,
        "fixedFee": 5005.35,
        "percentForLowerLimit": 34
    },
    {
        "lowerLimit": 57565.77,
        "upperLimit": undefined,
        "fixedFee": 18053.63,
        "percentForLowerLimit": 35
    }
];
var ISRTableBiweekly=[
    {
        "lowerLimit": 0.01,
        "upperLimit": 244.8,
        "fixedFee": 0,
        "percentForLowerLimit": 1.92
    },
    {
        "lowerLimit": 244.81,
        "upperLimit": 2077.50,
        "fixedFee": 4.65,
        "percentForLowerLimit": 6.4
    },
    {
        "lowerLimit": 2077.51,
        "upperLimit": 3651.00,
        "fixedFee": 121.95,
        "percentForLowerLimit": 10.88
    },
    {
        "lowerLimit": 3651.01,
        "upperLimit": 4244.10,
        "fixedFee": 293.25,
        "percentForLowerLimit": 16
    },
    {
        "lowerLimit": 4244.11,
        "upperLimit": 5081.40,
        "fixedFee": 388.05,
        "percentForLowerLimit": 17.92
    },
    {
        "lowerLimit": 5081.41,
        "upperLimit": 10248.45,
        "fixedFee": 538.2,
        "percentForLowerLimit": 21.36
    },
    {
        "lowerLimit": 10248.46,
        "upperLimit": 16153.05,
        "fixedFee": 1641.75,
        "percentForLowerLimit": 23.52
    },
    {
        "lowerLimit": 16153.06,
        "upperLimit": 30838.80,
        "fixedFee": 3030.60,
        "percentForLowerLimit": 30
    },
    {
        "lowerLimit": 30838.81,
        "upperLimit": 41118.45,
        "fixedFee": 7436.25,
        "percentForLowerLimit": 32
    },
    {
        "lowerLimit": 41118.46,
        "upperLimit": 123355.20,
        "fixedFee": 10725.75,
        "percentForLowerLimit": 34
    },
    {
        "lowerLimit": 123355.21,
        "upperLimit": undefined,
        "fixedFee": 38686.35,
        "percentForLowerLimit": 35
    }
];
var ISRTableMonthly=[
    {
        "lowerLimit": 0.01,
        "upperLimit": 496.07,
        "fixedFee": 0,
        "percentForLowerLimit": 1.92
    },
    {
        "lowerLimit": 496.08,
        "upperLimit": 4210.41,
        "fixedFee": 9.52,
        "percentForLowerLimit": 6.4
    },
    {
        "lowerLimit": 4210.42,
        "upperLimit": 7399.42,
        "fixedFee": 247.24,
        "percentForLowerLimit": 10.88
    },
    {
        "lowerLimit": 7399.43,
        "upperLimit": 8601.50,
        "fixedFee": 594.21,
        "percentForLowerLimit": 16
    },
    {
        "lowerLimit": 8601.51,
        "upperLimit": 10298.35,
        "fixedFee": 786.54,
        "percentForLowerLimit": 17.92
    },
    {
        "lowerLimit": 10298.36,
        "upperLimit": 20770.29,
        "fixedFee": 1090.61,
        "percentForLowerLimit": 21.36
    },
    {
        "lowerLimit": 20770.30,
        "upperLimit": 32736.83,
        "fixedFee": 3327.42,
        "percentForLowerLimit": 23.52
    },
    {
        "lowerLimit": 32736.84,
        "upperLimit": 62500.00,
        "fixedFee": 6141.95,
        "percentForLowerLimit": 30
    },
    {
        "lowerLimit": 62500.01,
        "upperLimit": 83333.33,
        "fixedFee": 15070.90,
        "percentForLowerLimit": 32
    },
    {
        "lowerLimit": 83333.34,
        "upperLimit": 250000.00,
        "fixedFee": 21737.57,
        "percentForLowerLimit": 34
    },
    {
        "lowerLimit": 250000.01,
        "upperLimit": undefined,
        "fixedFee": 78404.23,
        "percentForLowerLimit": 35
    }
];