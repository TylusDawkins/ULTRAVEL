import './styles/App.css'
import { Routes, Route } from 'react-router-dom'
import Locations from './components/Locations'
import Reviews from './components/Reviews'
import  AddReviewForm  from './components/AddReviewForm'


const App = () => {
  console.log('Hello World!')
  return (
    <div className="App">
      <h3>ULTRAVEL Travel Blog</h3>
      <div className='Location-list'>
      </div>
      <Routes>
        <Route path='/' element={<Locations />} />
        <Route path="/locations-list/:id" element={<Reviews />} />
        <Route path='/locations-list/:id/addreview' element={<AddReviewForm />} />
      </Routes>
    </div>
  )
}

export default App