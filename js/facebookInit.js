
var statement="Please sign in!";
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
      console.log(response);
		  
      FB.getLoginStatus
      (
        
        function(response)
        {
          if(response.authResponse)
          {
            FB.api
            (
              '/me'
              , 
              function(response) 
              {
                var userObject=JSON.stringify(response);
                // statement=userObject["name"];
                console.log(statement);
                var highlightTag= document.querySelector("#instruction");                
                highlightTag.textContent="Welcome "+response.name;
                // console.log(JSON.stringify(response));
              }
            );
          


          }
          else
          {
            console.log("status != connected!");
          } 
        }
      );
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

 var changeText= function()
{
  FB.getLoginStatus
  (
    function(response)
    {
      if(response.authResponse)
      {
        var highlightTag= document.querySelector("#instruction");
        highlightTag.textContent="Welcome!";
      }  
    }
  )
}