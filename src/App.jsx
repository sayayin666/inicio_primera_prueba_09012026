import Page3 from './CMP/Page3'
import Page2 from './CMP/Page2'
import Page1 from './CMP/Page1'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Page1></Page1>}></Route>
      <Route path='/page2' element={<Page2></Page2>}></Route>
      <Route path='/page3' element={<Page3></Page3>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
