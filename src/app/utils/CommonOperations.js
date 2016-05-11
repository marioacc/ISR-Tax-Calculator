/**
 * Created by mario on 5/10/2016.
 */
//years1,2,3,4,5 a 9,10 a 14,15 a 19,20 a 24,25 a 29,30 a 34

var integrationFactors=[1.0452,1.0465,1.0479,1.0493,1.0506,1.0520,1.0534,1.0547,1.0561,1.0575];
var SMGVDF =73.04;
var treeSMGVDF=3*SMGVDF;

module.exports={
  calculateSBC:function(SD,antiquity){
    "use strict";
    var antiquityYears = Math.floor(antiquity);
    var integrationFactor;
    if (antiquityYears===0){
      return SD*integrationFactors[0];
    }else if (antiquity < 5){
      return SD*integrationFactors[antiquity-1];
    }else{
      return SD*integrationFactors[antiquity-1+Math.floor(antiquity/5)];
    }
  },
  calculateISR:function(){
    "use strict";

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
    "upperLimit": "1,703.80",
    "fixedFee": 56.91,
    "percentForLowerLimit": 10.88
  },
  {
    "lowerLimit": "1,703.81",
    "upperLimit": "1,980.58",
    "fixedFee": 136.85,
    "percentForLowerLimit": 16
  },
  {
    "lowerLimit": "1,980.59",
    "upperLimit": "2,371.32",
    "fixedFee": 181.09,
    "percentForLowerLimit": 17.92
  },
  {
    "lowerLimit": "2,371.33",
    "upperLimit": "4,782.61",
    "fixedFee": 251.16,
    "percentForLowerLimit": 21.36
  },
  {
    "lowerLimit": "4,782.62",
    "upperLimit": "7,538.09",
    "fixedFee": 766.15,
    "percentForLowerLimit": 23.52
  },
  {
    "lowerLimit": "7,538.10",
    "upperLimit": "14,391.44",
    "fixedFee": "1,414.28",
    "percentForLowerLimit": 30
  },
  {
    "lowerLimit": "14,391.45",
    "upperLimit": "19,188.61",
    "fixedFee": "3,470.25",
    "percentForLowerLimit": 32
  },
  {
    "lowerLimit": "19,188.62",
    "upperLimit": "57,565.76",
    "fixedFee": "5,005.35",
    "percentForLowerLimit": 34
  },
  {
    "lowerLimit": "57,565.77",
    "upperLimit": undefined,
    "fixedFee": "18,053.63",
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
    "upperLimit": "2,077.50",
    "fixedFee": 4.65,
    "percentForLowerLimit": 6.4
  },
  {
    "lowerLimit": "2,077.51",
    "upperLimit": "3,651.00",
    "fixedFee": 121.95,
    "percentForLowerLimit": 10.88
  },
  {
    "lowerLimit": "3,651.01",
    "upperLimit": "4,244.10",
    "fixedFee": 293.25,
    "percentForLowerLimit": 16
  },
  {
    "lowerLimit": "4,244.11",
    "upperLimit": "5,081.40",
    "fixedFee": 388.05,
    "percentForLowerLimit": 17.92
  },
  {
    "lowerLimit": "5,081.41",
    "upperLimit": "10,248.45",
    "fixedFee": 538.2,
    "percentForLowerLimit": 21.36
  },
  {
    "lowerLimit": "10,248.46",
    "upperLimit": "16,153.05",
    "fixedFee": "1,641.75",
    "percentForLowerLimit": 23.52
  },
  {
    "lowerLimit": "16,153.06",
    "upperLimit": "30,838.80",
    "fixedFee": "3,030.60",
    "percentForLowerLimit": 30
  },
  {
    "lowerLimit": "30,838.81",
    "upperLimit": "41,118.45",
    "fixedFee": "7,436.25",
    "percentForLowerLimit": 32
  },
  {
    "lowerLimit": "41,118.46",
    "upperLimit": "123,355.20",
    "fixedFee": "10,725.75",
    "percentForLowerLimit": 34
  },
  {
    "lowerLimit": "123,355.21",
    "upperLimit": undefined,
    "fixedFee": "38,686.35",
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
    "upperLimit": "4,210.41",
    "fixedFee": 9.52,
    "percentForLowerLimit": 6.4
  },
  {
    "lowerLimit": "4,210.42",
    "upperLimit": "7,399.42",
    "fixedFee": 247.24,
    "percentForLowerLimit": 10.88
  },
  {
    "lowerLimit": "7,399.43",
    "upperLimit": "8,601.50",
    "fixedFee": 594.21,
    "percentForLowerLimit": 16
  },
  {
    "lowerLimit": "8,601.51",
    "upperLimit": "10,298.35",
    "fixedFee": 786.54,
    "percentForLowerLimit": 17.92
  },
  {
    "lowerLimit": "10,298.36",
    "upperLimit": "20,770.29",
    "fixedFee": "1,090.61",
    "percentForLowerLimit": 21.36
  },
  {
    "lowerLimit": "20,770.30",
    "upperLimit": "32,736.83",
    "fixedFee": "3,327.42",
    "percentForLowerLimit": 23.52
  },
  {
    "lowerLimit": "32,736.84",
    "upperLimit": "62,500.00",
    "fixedFee": "6,141.95",
    "percentForLowerLimit": 30
  },
  {
    "lowerLimit": "62,500.01",
    "upperLimit": "83,333.33",
    "fixedFee": "15,070.90",
    "percentForLowerLimit": 32
  },
  {
    "lowerLimit": "83,333.34",
    "upperLimit": "250,000.00",
    "fixedFee": "21,737.57",
    "percentForLowerLimit": 34
  },
  {
    "lowerLimit": "250,000.01",
    "upperLimit": undefined,
    "fixedFee": "78,404.23",
    "percentForLowerLimit": 35
  }
];