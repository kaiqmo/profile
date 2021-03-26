import './App.css';

import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import StickyFooter from './components/sticky-footer/sticky-footer.component';


function App() {

  return (
    <div className="App">
      <Header />
      <div className="body">
       
      </div>
      <Footer />
      <StickyFooter />
    </div>
  );
}

export default App;
