import '../css/App.scss';
import Layout from '../Layout';
import React from 'react';
import SelfIntro from '../components/SelfIntro';


class App extends React.Component{
  render(){
      return (
        <Layout>
          <SelfIntro/>
        </Layout>
      )
  }
}
export default App;


