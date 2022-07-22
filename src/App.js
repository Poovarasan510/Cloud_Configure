import logo from './logo.svg';
import './App.css';
import { Header } from './Header';
import { ContentAsFunction } from './ContentAsFunction';
import { NavBar } from './NavBar';
import { Footer } from './Footer';
import Content from './Content';
import Article from './Article';
import { FetchData } from './FetchData';
import { AddDriver } from './AddDriver';


function App() {

  const emailLink = {"mail":"ram@abc.com","text":"Admistrator"}
  
    return (
      <div className="Containter">
        <div className="Row">
{/*        
          <Header heading = "Poovarasan Service"> </Header> */}
          <Header heading = "Poovarasan Service"> </Header>
      </div>
        <div className="Row">
        <ContentAsFunction></ContentAsFunction>
        <FetchData></FetchData>
        <AddDriver></AddDriver>
        {/* {<Content></Content>}  */}
          {/* <Article></Article> */}
         
          <Footer designer={'ABC corporation'} email={emailLink}></Footer>
        
          </div>
        
      </div>
    );
  }
  
  export default App;
