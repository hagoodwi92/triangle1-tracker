$(document).ready(function() {
  $("#triangle").submit(function(event) {
    event.preventDefault();
    const input1 = parseInt($("#number1").val());
    const input2 = parseInt($("#number2").val());
    const input3 = parseInt($("#number3").val());
    if(input1 + input2 <= input3 || input2 + input3 <= input1 || input3 + input1 <= input2) {
    $("#not-triangle").show();
  } else if (input1 === input2 && input2 === input3 && input3 === input1) {
    $("#equilateral").show();
  } else if (input1 === input2 || input2 === input3 || input3 === input1){
    $("#isosceles").show();
  }
    else if (input1 != input2 || input2 != input3 || input3 != input1) {
    $("#scalene").show();
  } else {
    alert("There is an error")
  }
    
  });
});

//for equilateral: (input1 === input2 === input3) 
//isos( input1 === input2 || input2 === input3 || input3 === input1)
//not tri   ((input1 + input2 <= input3 || input2 + input3 <= input 1 || input3 + input1 <= input2))
// scaline ( input1 != input2 && input2 != input3 && input3 != input1)

