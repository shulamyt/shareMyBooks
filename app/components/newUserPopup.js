import React from 'react';
import SkyLight from 'react-skylight';
var $ = require("jquery");
import * as restService from './../service/restService';


class NewUserPopup extends React.Component {
  constructor(props){
    super(props);
  }
  isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
  }
  adduser(){
    var err=false;
    var password=$("#pswrd").val();
    var f_name=$("#f_n").val();
    var l_name=$("#l_n").val();
    var email=$("#eml").val();
    var phone=$("#phn").val();
    var address=$("#add").val();
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var filter = /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/;
    if(password.trim()=="" || f_name.trim()=="" || l_name.trim()==""  || address.trim()=="" || phone.trim()=="" || email.trim()==""){
        $("#spnErr").text("You must fill in required fields!!! :(");
        err=true;
    }
    else{
      $("#spnErr").text("");
    }
    if(phone!="" && !filter.test(phone)){
        $("#spnphn").text("Valid format only!!!");
        err=true;
    }
    else{
      $("#spnphn").text("");
    }
    if(email!="" && !regex.test(email)){
      $("#spneml").text("Valid format only!!!");
        err=true;
    }
    else{
      $("#spneml").text("");
    }
    if (!err){
      var user={
      "password":password,
      "f_name":f_name,
      "l_name":l_name,
      "email":email,
      "phone":phone,
      "address":address
      }
      console.log(user);
      restService.post('/users', user).then(function(fetchProjects){
      console.log("retrn from server");
      });
      this.refs.simpleDialog.hide();
    }
  }
  render() {

    return (
      <div>
        <section>
          <button onClick={() => this.refs.simpleDialog.show()}>new user</button>
        </section>
        <SkyLight hideOnOverlayClicked ref="simpleDialog" title="Welcome to ShareMyBooks">
          <h3>Hello, thank you for joining us!</h3>
          <h4>please enter your details:</h4>
          *password: <input type="text" id="pswrd"/><br/><br/>
          *First name: <input type="text" id="f_n"/><br/><br/>
          *Last name:  <input type="text" id="l_n" /><br/><br/>
          Email:      <input type="text" id="eml"/><span id="spneml"></span><br/><br/>
          *phone:    <input type="text" id="phn"/><span id="spnphn"></span><br/><br/>
          *Address:    <input type="text" id="add"/><br/><br/>
           <span id="spnErr"></span><br/><br/>
           <button onClick={()=>this.adduser()}>add</button>
        </SkyLight>
      </div>
    )
  }
}

NewUserPopup.displayName = 'NewUserPopup';

export default NewUserPopup;
