/**
 * Created by mario on 4/15/2016.
 */

var userMaxNameLength= 50;
var passwordMinLength = 8;
var passwordMaxLength=16;
var alfaNumRegEx= /(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/i;
var RFCRegEx=/^([A-Z,Ñ,&]{3,4}([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])[A-Z|\d]{3})$/;

module.exports={
  /**Validates a Name
   *@param {string} name The name to valid
   *@returns boolean
   * */
  validateName: function(name){
    "use strict";
    return name<=userMaxNameLength ;
  },
  /**Validates a Password
   *@param {string} password The password to valid
   *@returns boolean
   * */
  validatePassword:function(password){
    "use strict";
    return password>=passwordMinLength && password<=passwordMaxLength && alfaNumRegEx.test(password);
  },
  /**Validates RFC
   *@param {string} rfc The rfc to valid
   *@returns boolean
   * */
  validateRFC: function (rfc){
    "use strict";
    return RFCRegEx.test(rfc);
  },
  /**Validates NSS
   *@param {string} nss The social security number to validate.
   *@returns boolean
   * */
  validateRFC: function (nss){
    "use strict";
    
  }

};

