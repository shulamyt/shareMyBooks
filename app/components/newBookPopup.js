import React from 'react';
import SkyLight from 'react-skylight';
var $ = require("jquery");
import * as restService from './../service/restService';


class NewBookPopup extends React.Component {
  constructor(props){
    super(props);
  }
  addBook(){
    var name=$("#name").val();
    var auther=$("#auther").val();
    var description=$("#description").val();
    var created_at=$("#cday").val();
    var shelf=$("#shelf").val();
    var column=$("#colmn").val();
    var isloan= $("#isloan").checked?true:false;
    var book={
      "name":name,
      "auther":auther,
      "description":description,
      "created_at":created_at,
      "shelf":shelf,
      "column":column,
      "isloan":isloan
    }
    restService.post('/books', book).then(function(fetchProjects){
      console.log("retrn from server");
      });
      this.refs.simpleDialog.hide();
  }
  render() {
    return (
      <div>
        <section>
          <button onClick={() => this.refs.simpleDialog.show()}>add book</button>
        </section>
        <SkyLight hideOnOverlayClicked ref="simpleDialog" title="Add a New Book">
          <h4>please enter details:</h4>
          *name: <input type="text" id="name"/><br/><br/>
          auther: <input type="text" id="auther"/><br/><br/>
          description:  <input type="text" id="description"/><br/><br/>
          created_at:      <input type="date" id="cday"/><br/><br/>
          shelf:    <input type="text" id="shelf"/><span id="spnphn"></span><br/><br/>
          column:    <input type="text" id="colmn"/><br/><br/>
          isloan: <input type="checkbox" id="isloan"/><br/><br/>
          <button onClick={()=>this.addBook()}>add</button>
        </SkyLight>
      </div>
    )
  }
}

NewBookPopup.displayName = 'NewBookPopup';

export default NewBookPopup;
