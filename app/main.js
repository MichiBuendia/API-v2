$(document).ready(function() {
  console.log("Ready!");

var ip = "https://login.lisk.io";


getStatus=function(){

  $.ajax({
    method: "GET",
    url: ip + "/api/loader/status/sync",
    cache: false,
    success:function(data){
      console.log(data);
    }
  })


}

getStatus();

});
