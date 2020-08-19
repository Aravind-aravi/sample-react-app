import React from 'react';
import './App.css';
import Contactadd from './Assignment/ContactRedux/Contact-add';
import Contactview  from './Assignment/ContactRedux/Contact-view';
import { Youtube } from './edx assignment/components/youtube';

// import Dashboard from './Assignment/UserRouter/Dashboard';
// import {BrowserRouter} from 'react-router-dom';
// import ContactList from './Assignment/Contact/ContactList';
// import CounterAction from './Assignment/ReactRedux/CounterAction';
// import CounterResult from './Assignment/ReactRedux/CounterResult';
// import FormValidation from './Assignment/Formik/FormValidation';

class App extends React.Component {

  // constructor(props) {
  //   super(props);
  //   console.log('contructed called');

  // }

  // componentDidMount() {
  //   console.log("componentDidMount called");
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   console.log("componenetDidUpdate called");
  // }

  render() {
    return <div className="App" >
      <div >
        {/* <ContactList></ContactList> */}
        {/* <CounterAction></CounterAction>
        <CounterResult></CounterResult> */}
        {/* <FormValidation></FormValidation> */}
        {/* <Contactadd></Contactadd>
        <Contactview></Contactview> */}
<Youtube></Youtube>
      </div>

    </div>
  }
}

export default App;
