import TeamDirectory from './components/team-directory'
import TempConverter from './components/temp-converter'

import './index.css'

function App() {
  return (
    <div id='app'>

      <div className='card'>
        <TempConverter />
      </div>

      <div className='card'>
        <TeamDirectory />
      </div>

    </div>
  )
}

export default App
