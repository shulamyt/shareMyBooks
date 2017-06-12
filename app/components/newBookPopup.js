import React from 'react';
import SkyLight from 'react-skylight';
var $ = require("jquery");
import * as restService from './../service/restService';
import styles from './NewBookPopup.css';
import CssModules from 'react-css-modules';

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
          <button className='button' title="add book" onClick={() => this.refs.simpleDialog.show()}>+</button>
        </section>
        <SkyLight hideOnOverlayClicked ref="simpleDialog">
        <h3 className="h3">ספר חדש</h3>
          <h4 className="h4">הכנס/י פרטים:</h4>
          <div className="char">*</div>
          <input className="input" placeholder="שם ספר" type="text" id="name"/>
          <input className="input" placeholder="סופר" type="text" id="auther"/>
          <input className="input" placeholder="תאור" type="text" id="description"/>
          <input className="input" placeholder="תאריך יצירה" type="date" id="cday"/>
          <input className="input" placeholder="מדף" type="text" id="shelf"/><span id="spnphn"></span>
          <input className="input" placeholder="עמודה" type="text" id="colmn"/>
          <div> האם מושאל? <input placeholder="האם מושאל?" type="checkbox" id="isloan"/></div>
          <button className='button' onClick={()=>this.addBook()}>+</button>
        </SkyLight>
      </div>
    )
  }
}

NewBookPopup.displayName = 'NewBookPopup';

export default CssModules(NewBookPopup, styles);

