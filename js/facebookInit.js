  
  
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

  
    FB.getLoginStatus
    (
      function(response) 
      {
        statusChangeCallback(response);
      }
    );

  };


function statusChangeCallback(response) 
  {
    
    if (response.status === 'connected') 
    {
  
      window.location.href="http://localhost:8080/facebookFetch/home.html";  
    } 
  
    else 
    {
  
      document.getElementById('status').innerHTML = 'Please log into this app.';
    }
  
  }

  function checkLoginState() 
  {
  
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  
  }
  
  


  (
    function(d, s, id) 
    {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }
    (document, 'script', 'facebook-jssdk')
  );

 