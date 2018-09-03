function askWatson() {
    

    var ques = document.getElementById("question").value;
    console.log("About to start AJAX.");
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://nats1750.mybluemix.net/sendques",
        "method": "POST",
        "headers": {
          "Cache-Control": "no-cache",
          "Postman-Token": "c432bb74-a84f-4837-9acc-36d82983dd8d"
        },
        "processData": false,
        "contentType": false,
        "mimeType": "multipart/form-data",
        "data": ques
        }
        
        $.ajax(settings).done(function (response) {
            console.log("Ajax complete.");
            $("#chatbox-body").append("<p>"+response+"</p>");
        
        });

}


function date() {
    let date = new Date();

	let dd = date.getDate();
	let mm = date.getMonth() + 1;
	let yy = date.getFullYear();

	if (dd < 10) {
		dd = '0' + dd;
	}
	if (mm < 10) {
		mm = '0' + mm;
    }
    

	$("#currentDate").html(mm + '/' + dd + '/' + yy);
	console.log(message);
}

