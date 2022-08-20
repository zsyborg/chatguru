function loadDoc() {
  var Username =  document.getElementById("Username").value;
  var Password =  document.getElementById("Password").value;
  if(Username == ""){ 
 
     document.getElementById("myDIV").style.display = "block";
    document.getElementById("myDIV").innerHTML="Enter Username";
    setTimeout(function(){ document.getElementById("myDIV").style.display = "none";  }, 2000);
   
   }else if(Password == ""){
     document.getElementById("myDIV").style.display = "block";
    document.getElementById("myDIV").innerHTML="Enter Password";
    setTimeout(function(){ document.getElementById("myDIV").style.display = "none";  }, 2000);
  }else {
    if(Password != "" && Username != ""){
      document.getElementById("loginbutton").innerHTML="Please wait..";
      document.getElementById("loginbutton").style.cursor = "not-allowed";
      const xhttp = new XMLHttpRequest();
      xhttp.onload = function() {
      console.log(this.responseText);
        const obj = JSON.parse(this.responseText);     
        if(obj.status=='409'){
        document.getElementById("myDIV").style.display = "block";
        document.getElementById("myDIV").innerHTML=obj.message;
        setTimeout(function(){ document.getElementById("myDIV").style.display = "none";  }, 2000);
        }
        if(obj.status=='200' && obj.message=='Success'){   
            sessionStorage.setItem("Brands", this.responseText);
            //all local storage
           window.localStorage.setItem("Brands", this.responseText);
           window.localStorage.setItem("username", Username);
           window.localStorage.setItem("password", Password)
          window.location.href = "dashboard.php";
        }
      }
      xhttp.open("POST", "submit.php");
      xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      xhttp.send("username="+Username+"&password="+Password);
    }     
  }
}


function Cancel(){
  document.getElementById('bootstrapBasicModal').style.display = "none";
}
 
function loginApi(Username,Password,brand_id){
         const xhttp = new XMLHttpRequest();
          xhttp.onload = function() {          
          console.log(Username);
          console.log(Password);
          console.log(brand_id);
          const obj = JSON.parse(this.responseText); 
          console.log(obj.status);
          if(obj.status=='200'){  
              window.localStorage.setItem("CustomerDetails", this.responseText);
              sessionStorage.setItem("CustomerDetails", this.responseText);
             window.location.href = "InnerBrand.php";
          }
          if(obj.status=='201'){ 
            document.getElementById('bootstrapBasicModal').style.display = "block";
            document.getElementById("modalbody").innerHTML=obj.message;
            document.getElementById("brand_id").value=brand_id;
          }
        }
        xhttp.open("POST", "checkeLogin.php");
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send("username="+Username+"&password="+Password+"&AppId="+AppId);
    }
    function Forcelogin(Username,Password){
        var brand_id = document.getElementById("brand_id").value;
        var AuthKey = window.localStorage.getItem("AuthKey_brands"+brand_id);
        var ApiKey = window.localStorage.getItem("ApiKey_brands"+brand_id );
        var ApiEndPoint = window.localStorage.getItem("ApiEndPoint_brands"+brand_id);
        var AppId = window.localStorage.getItem("AppId_brands"+brand_id);
        var Name =  window.localStorage.getItem("Name_brands"+brand_id);
        
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function() {
            // console.log(this.responseText);
          const obj = JSON.parse(this.responseText); 
          if(obj.status=='200'){  
             window.localStorage.setItem("CustomerDetails", this.responseText);
             sessionStorage.setItem("CustomerDetails", this.responseText);
             window.localStorage.setItem("page_brand_id", brand_id)
            window.location.href = "InnerBrand.php";
          }
          if(obj.status=='201'){ 
            document.getElementById('bootstrapBasicModal').style.display = "block";
            document.getElementById("modalbody").innerHTML=obj.message;

          }
        }
        xhttp.open("POST", "ForceRelogin.php");
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send("username="+Username+"&password="+Password+"&AuthKey="+AuthKey+"&ApiKey="+ApiKey+"&ApiEndPoint="+ApiEndPoint+"&AppId="+AppId+"&Name="+Name);
     
}

// document.getElementById("feedbacktext").onchange = function() {myFunction_feedback()};
// function myFunction_feedback() {
//  var feedback = document.getElementById('feedbacktext').value;
//  document.getElementById('feedbacktext1').value=feedback;
// }
 
//  function myFunction(id){
//      if(id=='star1'){
//         var star1 = document.getElementById(id);
//          if (star1.checked == true) {
//             console.log("one");
//           document.getElementById('Starrating').value=1;
//           }
//      }
//      if(id=='star2'){
//         var star2 = document.getElementById(id);
//          if (star2.checked == true) {
//             console.log("two");
//           document.getElementById('Starrating').value=2;
//           }
//      }
//      if(id=='star3'){
//         var star3 = document.getElementById(id);
//          if (star3.checked == true) {
//             console.log("three");
//           document.getElementById('Starrating').value=3;
//           }
//      }
//      if(id=='star4'){
//         var star4 = document.getElementById(id);
//          if (star4.checked == true) {
//             console.log("four");
//           document.getElementById('Starrating').value=4;
//           }
//      }
//      if(id=='star5'){
//         var star5 = document.getElementById(id);
//          if (star5.checked == true) {
//             console.log("five");
//           document.getElementById('Starrating').value=5;
//           }
//      }
     
//  }
 


 