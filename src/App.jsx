
import '../src/App.scss'
import Header from './components/Header/Header'
import {Link, Outlet} from 'react-router-dom'
function App() {

  return (
    <>
    <div className='header-container'>
      <Header/>
    </div>
    <div className='main-container'>
      <div className='sizenav-container'>
      </div>
      <div className='app-content'>
        <Outlet/>
      </div>
    </div>
   
    </>
  )
}

export default App
