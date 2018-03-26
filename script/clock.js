(function(){
'use strict';
                          
document.addEventListener('DOMContentLoaded', function(){
    	var c = document.getElementById('current-time');

    setInterval (updateTime)
    
    function updateTime () {
        var d = new Date ();
        
        var hours = d.getHours(),
			minutes = d.getMinutes(),
            seconds = d.getSeconds();
        
        if (minutes < 10) {
			minutes = '0' + minutes;
		}
        if (seconds < 10) {
            seconds = '0' + seconds;
        }

	
	c.innerHTML = hours + ':' + minutes + ':' + seconds;
     
    }


});


})();