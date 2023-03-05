import CenterSection from './components/Home/home';
import './App.css';
import Navbar from './components/Navbar/navbar';
//<img src={logo} className="App-logo" alt="logo" />
function App() {
  return (
    <main>
      <Navbar />
      <section className='small-section'></section>
      <CenterSection />
      <section className='small-section'></section>
    </main>
  );
}

export default App;
