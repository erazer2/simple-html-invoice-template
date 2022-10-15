
//change these variables  to make it easier for your company
var invoiceNumber=124;
var createdDate="January 1,2022";
var dueDate="February 1,2022";
var vatRate=0.2;

var initialLogo="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png";
var CompanyName="Erazer Triplet2";
var CompanyStreet="Accacia Avenue";
var CompanycityAndPostcode="BananaMan";



function populateInvoice(){

    document.getElementById("invoiceLogo").src=initialLogo;

    document.getElementById("companyName").value=CompanyName;
    document.getElementById("companyStreet").value=CompanyStreet;
    document.getElementById("companyCityAndPostCode").value=CompanycityAndPostcode;

    document.getElementById("invoiceNumber").value=invoiceNumber;
    document.getElementById("invoiceDate").value=createdDate;
    document.getElementById("invoiceDueDate").value=dueDate;

}

function calcTotals(){

    var totalSofar=0;

    for (var i=1;i<4;i++){
        itemNumber="Item"+i;

        totalSofar=totalSofar+parseFloat(document.getElementById(itemNumber).value);

    }
    document.getElementById("TotalExVat").value=(totalSofar).toFixed(2);
    document.getElementById("Vat").value=(totalSofar*vatRate).toFixed(2);
    document.getElementById("totalIncVat").value=(totalSofar*vatRate+parseFloat(totalSofar)).toFixed(2);

}

function changeLogoURL(){
console.log("love ya!");

    let newLogoURL = prompt("Enter your logoURL", "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png");
    let text;
    if (newLogoURL == null || newLogoURL == "") {
      text = "User cancelled the prompt.";
    } else {
     document.getElementById("invoiceLogo").src=newLogoURL;

    }

}