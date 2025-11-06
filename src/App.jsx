import './App.css'
import { Route, Routes } from 'react-router-dom'
import LandingPages from './pages/LandingPage'
import Resume from './pages/Resume'
import UserForm from './pages/UserForm'
import History from './pages/History'
import Pnf from './pages/Pnf'
import Header from './components/Header'
import Footer from './components/Footer'
import ViewResume from './pages/ViewResume'


function App() {

  return (
    <>
    <Header/>
      <Routes>
        <Route path='/' element={<LandingPages/>} />
        <Route path='/resume' element={<Resume/>} />
        <Route path='/userform' element={<UserForm/>} />
        <Route path='/history' element={<History/>} />
        {/* dynamic URL are prefix with column and dynamic value will be stored in variable after column
        eg- :id */}
        <Route path='/resumes/:id/view' element={<ViewResume/>}/>
        <Route path='/*' element={<Pnf/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
