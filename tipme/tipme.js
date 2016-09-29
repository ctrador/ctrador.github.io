$(function () {

    $("#calc").on("click", function () {

        var split = $("#splitBetween").val();

        var tipPrecent = $("#tipp").val();

        var bill = $("#bill").val();

        var tip = (bill / 1 * tipPrecent);

        var total = bill / 1 + tip;

        var splitTotal = total / split;

        $("#totalBill").html("<h3>Total Bill + Tip =" + total.toFixed(2) + "</h3>");

        $("#tipamount").html("<h3> Total Tip =" + tip.toFixed(2) + "</h3");

        $("#split").html("<h3> Total Bill For Each Person" + splitTotal.toFixed(2) + "</h3>");
        

        });

$("#billClear").on("click", function (){
            $("#totalBill").html("<h3> Total Bill + Tip = </h3>");
            $("#tipamount").html("<h3> Total Tip = </h3>");
            $("#split").html("<h3> Total Bill For Each Person =</h3>");
            $("#bill").reset(0);
            split = null;
            tipPercent = null;
            bill = null;
            tip = null;
            total = null;
            splitTotal = null;

    });

$("#calc").on("click", function checkbill() {
    var x = $("#bill").value;
    if (x == null || x == "") {
        alert("Bill amount must Be valid amount");
        return false;
    }
    



function validate(evt) {
   var theEvent = evt || window.event;
   var key = theEvent.keyCode || theEvent.which;
   key = String.fromCharCode(key);
   var regex = /[0-9]|\./;
   if (!regex.test(key)) {
       theEvent.returnValue = false;
       if (theEvent.preventDefault) theEvent.preventDefault();
   }

}
})

});
function validate(evt) {
   var theEvent = evt || window.event;
   var key = theEvent.keyCode || theEvent.which;
   key = String.fromCharCode(key);
   var regex = /[0-9]|\./;
   if (!regex.test(key)) {
       theEvent.returnValue = false;
       if (theEvent.preventDefault) theEvent.preventDefault();
   }

}