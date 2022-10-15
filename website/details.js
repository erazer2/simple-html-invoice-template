
var invoiceNumber=124;
var createdDate="January 1,2022";
var dueDate="February 1,2022";
var vatRate=0.2;



function populateInvoice(){

var invoiceNumber=124;
    document.getElementById("InvoiceNumber").innerHTML=invoiceNumber;



}

function calcTotals(){

    var totalSofar=0;

    for (var i=1;i<4;i++){
        itemNumber="Item"+i;

        totalSofar=totalSofar+parseFloat(document.getElementById(itemNumber).value);

    }
    document.getElementById("TotalExVat").value=totalSofar;
    document.getElementById("Vat").value=totalSofar*vatRate;
    document.getElementById("totalIncVat").value=totalSofar*vatRate+parseFloat(totalSofar);

}

function changeLogoURL(){
console.log("love ya!");

    let newLogoURL = prompt("Enter your logoURL", "Harry Potter");
    let text;
    if (newLogoURL == null || newLogoURL == "") {
      text = "User cancelled the prompt.";
    } else {
     document.getElementById("invoiceLogo").src=newLogoURL;

    }

}