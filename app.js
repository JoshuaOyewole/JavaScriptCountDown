
     var timerId = function timerCutDown(){ 
        var date = new Date();
        var currentYear = date.getFullYear();

        var eventDate = new Date(currentYear,06,01);
        var now = new Date();

        //All in secs i.e converting from milliseconds to seconds
        var currentTimeInMSec = now.getTime();
        var eventTime = eventDate.getTime();

        var remTime =  eventTime - currentTimeInMSec;

        var curSecs = Math.floor(remTime / 1000);
        var currMins = Math.floor(curSecs / 60);
        var curHour = Math.floor(currMins/60);
        var curDay = Math.floor(curHour / 24);

    
        curHour%=24;
        currMins%= 60;
        curSecs%= 60; 
        curDay%= 24;
        console.log(curDay);

        document.getElementById('day').innerText = (curDay < 10) ? '0' + curDay : curDay;
        document.getElementById('hour').innerText = (curHour < 10)? '0' + curHour : curHour;
        document.getElementById('min').innerText = (currMins < 10)? '0' + currMins : currMins;
        document.getElementById('sec').innerText = (curSecs < 10)? '0' + curSecs : curSecs;
 
    };
      

    function randoomLetter(){
        var noArray, randNo;

        noArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','Y','Z'];
        i = Math.floor(Math.random() * noArray.length);
        console.log(noArray[i]);
    }
  
   
    let s = 60; //60s
    console.log(s);
    
    function timer(){
        /* document.getElementById('sec').innerText = (s < 10)? '0' + s : s; */
     /*    console.log(s);
        s--;
        console.log(s + 'Hello');
        
        if(s == -1){
            console.log('Time out');
            clearInterval(timer);
        } */
        let s =50;
        s = s +2;
        console.log(s);
        
    } 
    timer();
    console.log(s);
    

    

    