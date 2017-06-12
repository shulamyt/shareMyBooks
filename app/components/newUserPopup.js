import React from 'react';
import SkyLight from 'react-skylight';
var $ = require("jquery");
import * as restService from './../service/restService';
import styles from './newUserPopup.css';
import CssModules from 'react-css-modules';

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
        $("#spnError").text("You must fill in required fields!!! :(");
        err=true;
    }
    else{
      $("#spnError").text("");
    }
    if(phone!="" && !filter.test(phone)){
        $("#spnphn").text("Valid format only!!!");
        err=true;
    }
    else{
      $("#spnphn").text("");
    }
    // if(email!="" && !regex.test(email)){
    //   $("#spneml").text("Valid format only!!!");
    //     err=true;
    // }
    // else{
    //   $("#spneml").text("");
    // }
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
          <button className='button-n-u' onClick={() => this.refs.simpleDialog.show()}>משתמש חדש</button>
        </section>
        <SkyLight hideOnOverlayClicked ref="simpleDialog" title="">
          <h3 className='h3'>! שלום ותודה על הצטרפותכם</h3>
          <h4 className='h4'>אנא מלאו פרטים:</h4>
          <div className='require'><input placeholder="סיסמה" className='input' type="text" id="pswrd"/>*</div>
          <div className='require'><input placeholder="שם פרטי" className='input' type="text" id="f_n"/>*</div>
          <div className='require'><input placeholder="שם משפחה" className='input' type="text" id="l_n" />*</div>
          <div className='require'><input placeholder="מייל" className='input' type="text" id="eml"/>*</div>
          <span id="spneml"></span>
          <div className='require'><input placeholder="טלפון" className='input' type="text" id="phn"/>*</div>
          <span id="spnphn"></span>
          <div className='require'><input placeholder="כתובת" className='input' type="text" id="add"/>*</div>
          <span id="spnError"></span>
          <button className="button" onClick={()=>this.adduser()} >+</button>
        </SkyLight>
      </div>
    )
  }
}

NewUserPopup.displayName = 'NewUserPopup';

export default CssModules(NewUserPopup, styles);
