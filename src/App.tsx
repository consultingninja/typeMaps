import './App.css'
import { AppController } from './AppController'

function App() {
const {state,authMethod,handleSignIn} = AppController();

  return (
    <div className="App">
      <h1>Consulting Ninja</h1>
      <h1>Vite + React + Typescript</h1>
      <div className="card">
            {authMethod === '' &&<label htmlFor="message"> Please Choose sign in method</label>}
            {authMethod === '' && <form onSubmit={(e) => {e.preventDefault();handleSignIn(e,undefined)}}>
              <label htmlFor='fName'>First Name</label><br/>
              <input className='form-input' required type="text" id="firstName" name="firstName"></input>
              <br/>
              <label htmlFor='lName'>Last Name</label><br/>
              <input className='form-input' required type="text" id="lastName" name="lastName"></input>
              <br/>
              <label htmlFor='email'>Email</label><br/>
              <input className='form-input' required type="email" id="email" name="email"></input>
              <br />
              <button type='submit' name="Submit" className='btn-send'>Submit</button>
            </form>}

            {authMethod !== '' && <div>
                <p>Welcome {state.firstName}</p>
                <p>Using:{state.email}</p>
              </div>}

              {authMethod === '' &&<button type="button" name="3rd" onClick={(e) => handleSignIn(undefined,e)} className='btn-send'>Use 3rd party</button>}
      </div>

    </div>
  )
}

export default App
