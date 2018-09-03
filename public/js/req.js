function askWatson() {
    
    var ques = document.getElementById("question").value;
    const box = document.getElementById("chatbox");
    console.log("About to send request.");
  
    $.ajax({
        type: "POST",
        url: "https://nats1750.mybluemix.net/sendques",
        crossDomain: true,
        data: { "question" : ques },
        success: function (data) {
           
            console.log("AJAX SUCCESS!");
            var date = new Date();
            var strTime = getTime(date);
            $("#chatbox-body").append("<p style=\"text-align:center\">" + strTime + "</p>");
            $("#chatbox-body").append("<p style=\"text-align:right\">"+ques+"</p>");
            setTimeout(function() {
                $("#chatbox-body").append("<p>"+data+"</p>");
                box.scrollTop = box.scrollHeight;
                
            }, 1500);
            

        },
        error: function (err) {
            console.log(err);
        }
    });

}

function getTime(d) {
    
    var hours = d.getHours();
    var minutes = d.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ampm;
    return strTime;
}

