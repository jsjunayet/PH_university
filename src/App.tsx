
import './App.css'
import MainLayout from './components/layout/MainLayout'
import PrivateRoute from './pages/PrivateRoute'

function App() {

  return <PrivateRoute><MainLayout/></PrivateRoute>
}

export default App
