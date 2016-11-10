import React from 'react';
import SkyLight from 'react-skylight';
var $ = require("jquery");
import * as restService from './../service/restService';


class Popup extends React.Component {
  constructor(props){
    super(props);
  }
  adduser(){
    var password=$("#pswrd").val();
    var f_name=$("#f_n").val();
    var l_name=$("#l_n").val();
    var email=$("#eml").val();
    var phone=$("#phn").val();
    var address=$("#add").val();
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
          *Email:      <input type="text" id="eml"/><br/><br/>
           phone:    <input type="text" id="phn"/><br/>
           Address:    <input type="text" id="add"/><br/>
           <button onClick={()=>this.adduser()}>add</button>
        </SkyLight>
      </div>
    )
  }
}

Popup.displayName = 'Popup';

export default Popup;
