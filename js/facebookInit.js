window.fbAsyncInit = function() 
{
    FB.init
    (
    	{
      		appId      : 1856495984403203,
      		cookie     : true,
      		xfbml      : true,
      		version    : 'v3.0'
    	}
    );
    

    FB.AppEvents.logPageView();   
    
	FB.getLoginStatus
	(
		function(response) 
		{
			console.log(response.status);
		}
	);



};


(
	function(d, s, id)
	{
    	var js, fjs = d.getElementsByTagName(s)[0];
     	if (d.getElementById(id)) {return;}
    	 js = d.createElement(s); js.id = id;
     	js.src = "https://connect.facebook.net/en_US/sdk.js";
     	fjs.parentNode.insertBefore(js, fjs);
    }

    (document, 'script', 'facebook-jssdk')

);

 
function checkLoginState() 
{
	FB.getLoginStatus
	(
		function(response)
		{
			if(response.authResponse)
    		{
    			console.log("status == connected!");
    		}
    		else
    		{
    			console.log("status != connected!");
    		}	

  		}
  	);
}