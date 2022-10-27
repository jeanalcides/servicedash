import { Tickets } from './pages/Tickets';
import { Home } from './pages/Home';
import './styles/global.css';
function App() {

  const page = 1;

  return (
    <div className="w-screen h-screen bg-gray-500 lg:flex">
      {page == 1 ? <Home /> : <Tickets /> }
      
    </div>
  )
}

export default App
