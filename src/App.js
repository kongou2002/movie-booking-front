import logo from './logo.svg';
import './App.css';
import Films from './components/FilmsContainer';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Navigation />
      <Films />
      <Footer />
    </div>
  );
}

export default App;
