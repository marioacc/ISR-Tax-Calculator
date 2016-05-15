/**
 * Created by mario on 5/10/2016.
 */
//years1,2,3,4,5 a 9,10 a 14,15 a 19,20 a 24,25 a 29,30 a 34

var integrationFactors=[1.0452,1.0465,1.0479,1.0493,1.0506,1.0520,1.0534,1.0547,1.0561,1.0575];
var SMGVDF =73.04;
var treeSMGVDF=3*SMGVDF;
var top= 25*SMGVDF;

var calculateSDI=function(SD, antiquity){
  "use strict";
  var antiquityYears = Math.floor(antiquity);
  var integrationFactor;
  if (antiquity < 5){
    return SD*integrationFactors[antiquityYears];
  }else{
    return SD*integrationFactors[3+Math.floor(antiquity/5)];
  }
};
module.exports={
  calculateImss :function(salary, workedDays, seniority){
    "use strict";
    var sicknessAndMaternity=0;
    var pensionersAndBeneficiaries=0;
    var sicknessAndMaternityMoney=0;
    var disabilityAndLife=0;
    var retirement=0;
    var IMSSPayment=0;
    var SBC =calculateSDI(salary,seniority);
    if(SBC >top){
      SBC=top;
    }
    //Sickenss and Maternity
    if(SBC>treeSMGVDF){
      sicknessAndMaternity=(SBC-treeSMGVDF)*workedDays*0.004;
    }
    pensionersAndBeneficiaries=workedDays*SBC*0.00375;
    sicknessAndMaternityMoney=workedDays*SBC*0.0025;
    disabilityAndLife=workedDays*SBC*0.00625;
    retirement=workedDays*SBC*0.01125;

    IMSSPayment=sicknessAndMaternity+pensionersAndBeneficiaries+sicknessAndMaternityMoney+
        disabilityAndLife+retirement;
    return IMSSPayment;



  }
};

