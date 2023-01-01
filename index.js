$(".btn-success").click(function()

  {
    let yourName = $("#yname").val();
    let crushName = $("#cname").val();

    if(yourName == "" || crushName == ""){
     alert('Please enter the names properly!');
    }
    else if (yourName.length <=2 || crushName.length <=2 ) {
     alert('Min lenght is 3')
    }
    else if(!isNaN(yourName) || !isNaN(crushName)){
     alert('Numbers are not allowed');
    }

    let percent = Math.floor((Math.random()*100)+1);
    $(".percentage").text(`${percent}%`);
    if(percent>70){
      $(".statement").text(`Great! there is so much love between ${yourName} & ${crushName} 😍`);
    }
    else if(percent<30){
      $(".statement").text(`oops! Looks like there is more to work out 😭`);
    }
    else {
      $(".statement").text(`Nice going! keep it up 😚`);
    }
  });
