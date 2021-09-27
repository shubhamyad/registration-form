function RESISTRATION() {
    var fname = 
        document.forms["RegForm"]["fName"];
    var lname = 
        document.forms["RegForm"]["lName"];
    var email = 
        document.forms["RegForm"]["EMail"];
    var phone = 
        document.forms["RegForm"]["phone"];
    var dob = 
        document.forms["RegForm"]["dob"];
    var address = 
        document.forms["RegForm"]["Address"];
    var city = 
        document.forms["RegForm"]["City"];
    var state = 
        document.forms["RegForm"]["State"];    
    var country = 
        document.forms["RegForm"]["country"];
    var zip = 
        document.forms["RegForm"]["Zip"];
    var password =
      document.forms["RegForm"]["password"];
    var re_password =
        document.forms["RegForm"]["re_password"]; 
        
    if (fname.value == "") {
        window.alert("Please enter your first name.");
        fname.focus();
        return false;
    }
    if (lname.value == "") {
        window.alert("Please enter your lastname.");
        lname.focus();
        return false;
    }
    if (email.value == "") {
        window.alert(
          "Please enter a valid e-mail address.");
        email.focus();
        return false;
    }
    if (phone.value == "") {
        window.alert(
          "Please enter your Phone number.");
        phone.focus();
        return false;   
    } 
    
    if (dob.value == "") {
        window.alert(
          "Please enter your DOB.");
        dob.focus();
        return false;
    }
    if (address.value == "") {
        window.alert("Please enter your Address.");
        address.focus();
        return false;
    }
    if (city.value == "") {
        window.alert("Please enter your City.");
        city.focus();
        return false;
    }
    if (state.value == "") {
        window.alert("Please enter State Name.");
        state.focus();
        return false;
    }
    if (country.value == "") {
        window.alert("Please enter Country Name.");
        country.focus();
        return false;
    }
    if (zip.value == "") {
        window.alert("Please enter your Zip.");
        zip.focus();
        return false;
    }  
    if(password.value == ""){
        window.alert("Please enter password");
        password.focus();
        return false;
    }
    if(re_password.value == ""){
        window.alert("Please enter re password");
        password.focus();
        return false;
    }
     if(password != re_password){
         window.alert("password  match");
         return true;
         }
    return true;

//var password = document.getElementById('password');
//function check(elem){
  //  if(elem.value.length>0){
   //     if(elem.value != password.value){
    //        document.getElementById('alert').innerHTML = "comfrim pass not match";
     //   }
   // }
//}
        
}  
