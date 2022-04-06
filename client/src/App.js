import './styles/App.css'
import { Routes, Route } from 'react-router-dom'
import LocationList from './components/LocationList'
import LocationDetails from './components/LocationDetails'


const App = () => {
  
  return (
    <div className="App">
      <h3>ULTRAVEL Travel Blog</h3>
      <div className='Location-list'>
      </div>
      <Routes>
        <Route path='/' element={<LocationList />} />
        <Route path="/locations-list/:id" element={<LocationDetails />} />
      </Routes>
    </div>
  )
}

export default App