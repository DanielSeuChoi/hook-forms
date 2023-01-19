import Userhform from './components/Userhform'
import './solar.css'

function App() {
    return (
        <div className='container mt-4'>
            <div className="card shadow">
                <div className="card-body">
                    <h1>Solar</h1>
                    <Userhform />
                </div>
            </div>
        </div>
    )
}

export default App