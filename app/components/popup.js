import React from 'react';
import SkyLight from 'react-skylight';

class Popup extends React.Component {
  constructor(props){
    super(props);
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
          *First name: <input type="text" /><br/><br/>
          *Last name:  <input type="text" /><br/><br/>
          *Email:      <input type="text" /><br/><br/>
           Address:    <input type="text" /><br/>

        </SkyLight>
      </div>
    )
  }
}

Popup.displayName = 'Popup';

export default Popup;