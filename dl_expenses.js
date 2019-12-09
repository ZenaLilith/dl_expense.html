"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Case Problem 2

   Author: Zena Crowley
   Date:   12/7/19
   
   Filename: dl_expenses.js
   
   Function List
   =============
   
   validateSummary()
      Validates the data entry in the summary field.
   
   calcClass(sumClass)
      Sums up all of the data values for elements of the sumClass class.
      
   calcExp()
      Calculates the travel expenses from all categories and dates.
      
   formatNumber(val, decimals)
      Formats the value, "val" to the number of decimals indicated 
      by "decimals", adding thousands separators.
      
   formatUSCurrency(val)
      Formats the value, "val", as U.S. currency.
      
*/
var changingCells = document.querySelectorAll("#travelExp input.sum");

for (var i = 0; i < changingCells.length; i++)
{
        changingCells[i].onchange = calcExp;
}

document.getElementById("submitButton").onclick = validateSummary;
}

function validateSummary() {
    var message = "You must include a summary of the trip in your report.";
    if (typeof summary.validation !== 'undefined') {
        message = "";
    }
    //else{
   //     message = "You must include a summary of the trip in your report.";
   // }

}
  
}

function calcClass(sumClass) {
        
        var sumFields  = document.querySelectorAll("." + sumClass);
        var sumTotal = 0;
        for (var i = 0; i < sumFields.length; i++) {
                itemValue = parseFloat(sumFields[i].value);
                
                if(!isNaN(itemValue)) {
                        sumTotal += itemValue;
                }
        }
        return sumTotal;
}

function calcExp() {
  
}






function formatNumber(val, decimals) {
   return val.toLocaleString(undefined, {minimumFractionDigits: decimals, 
                                         maximumFractionDigits: decimals});
}

function formatUSCurrency(val) {
   return val.toLocaleString('en-US', {style: "currency", currency: "USD"} );
}
