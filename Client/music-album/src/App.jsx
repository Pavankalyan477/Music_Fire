import './App.css';
import { HomePage } from './components/HomePage/HomePage';
import { LandingNavbar } from './components/LandingpageNav/LandingNavbar';

function App() {
    return <>
    <LandingNavbar/>
    <div className='gt'>
    <HomePage/>
    </div>
    </>
}

export default App;
