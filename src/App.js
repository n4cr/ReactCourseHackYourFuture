import React, {Component} from 'react';
import './App.css';
import Photo from './components/Photo';
import Header from './components/Header';
import ReferencesList from './components/ReferencesList';
import Footer from './components/Footer';


class App extends Component {
  render() {

    return (
        <div className="App">

          <Header> </Header>

          <Photo/>

          <ReferencesList/>

          <Footer number="+12314"/>

        </div>
    );
  }
}

export default App;
