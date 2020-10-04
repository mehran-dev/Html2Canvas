const ZonePrint = document.getElementById("container");





jQuery(".printCol").click(function (event) {
    event.preventDefault();

    var isResolved = false;
    html2canvas(ZonePrint)
        .then(function (canvas) {
            canvasData = canvas.toDataURL("image/png");
            isResolved = true;
        });

    var fs = setInterval(() => {
        if (isResolved) {
            printData();
            clearInterval(fs);
        }
    }, 500);

});


function printData() {

    /*  var WinPrint = window.open('', '', 'left=0,top=0,width=840px,height=600px,t oolbar=0,scrollbars=0,status=0');
     WinPrint.document.write('<html><head><link href="/CMSPages/GetResource.ashx?stylesheetname=Satkab" type="text/css" rel="stylesheet"></head><body dir="rtl" style="background-color: #ffffff; background-image: none;padding:0px 25px;"><table><tr><td><div style="padding: 5px;"><br/><br/>'
 
         + '<img src="' + canvasData + '">' +
         '</div></td></tr></table></body></html>');
     WinPrint.document.close();
     WinPrint.focus();
     WinPrint.print(); */
    //WinPrint.close();

    img = document.getElementById("preShow");

    img.src = canvasData;

    var link = document.createElement("a");
    document.body.appendChild(link);
    link.download = "vgsdf.png";
    link.href = canvasData;//.toDataURL("image/png");
    link.target = '_blank';
    link.click();


}






