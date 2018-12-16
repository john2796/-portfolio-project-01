import React, { Component } from 'react';
import Header from './Components/Header/Header';
import styled from 'styled-components';
import AboutUs from './Components/About/About';
import Footer from './Components/Footer/Footer';




const AppWrapper = styled.div`
`

class App extends Component {
  render() {
    return (
      <>
        <AppWrapper className="App">
          {/* ============================== 
                         Header 
          ====================================== */}
          <Header />
          {/* ============================== 
                         Main content Homepage
          ====================================== */}
          <AboutUs />
          {/* ============================== 
                         Footer
          ====================================== */}
          <Footer />
        </AppWrapper>
      </>
    );
  }
}

export default App;
