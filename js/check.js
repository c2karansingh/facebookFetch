



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

      if(response.authResponse)
      {
        
        FB.api
        (
        
          '/'+response.authResponse.userID+"/permissions"
        
          , 
          
          'get'
        
          ,

          
          // {
          //   fields:"id,name,email"
          // }
          
          // ,

          function(response) 
          {
                  // document.querySelector("#heading").innerHTML = 'welcome to the app, <strong>' + response.name +'<strong> !';
                  // document.querySelector("#mail").innerHTML = 'your E-mail id is, <strong>' + response.email +'<strong> !';
                  // console.log(response.email);
                  console.log(response);
                  
          }

        );

        FB.api
        (
          '/me'
          
          ,

          
          {
            fields:"id,name,email,gender"
          }
          
          ,

          function(response) 
          {
                  console.log(response);
                  if(response.gender==undefined)
                  {

                    FB.login
                    (
                      function(response) 
                      {
                        alert("Done!");
                      }
                      
                      ,
                      
                      {
                        scope: "user_gender"
                      }
                    );
                  
                  }  
                  document.querySelector("#heading").innerHTML = 'welcome to the app, <strong>' + response.name +'<strong> !';
                  document.querySelector("#mail").innerHTML = 'your E-mail id is, <strong>' + response.email +'<strong> !';
                  console.log(response.gender);

          }
        );
        
      
      }  
      else
            window.location.href="http://localhost:8080/facebookFetch/index.html";     
		  
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




