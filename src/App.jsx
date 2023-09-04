import './App.css'
import {createSignal} from "solid-js";

function App() {

    const [email, setEmail] = createSignal(null)
    const [submitted, setIsSubmitted] = createSignal(false) //(true)
    const handleSubmit = (event) => {
        event.preventDefault();
        if (email()) {
            setIsSubmitted(true)
        } else {
            return null;
        }
    };
    const handleEmail = (e) =>{
        setEmail(e.target.value)
    }
    const handleReturn = () =>{
        setIsSubmitted(false)
        setEmail(null)
    }
  return (
    <>
        {!submitted() &&
        <div className='not-submitted'>
        <img className='main-img' src='illustration-sign-up-mobile.svg' alt='illustration'/>
      <div className='main'>
          <h1 className='title'>Stay updated!</h1>


      <p>Join 60,000+ product managers receiving monthly updates on:</p>
          <div className='list'>
      <ul>
          <li className='link first'>Product discovery and building what matters</li>
          <li className='link'>Measuring to ensure updates are a success</li>
          <li className='link'>And much more!</li>
      </ul>
          </div>
          <div className='second'>
              <form onSubmit={handleSubmit}>
                  <div className='form'>
                  <span>Email address</span>
                  <input id="email" name="email"  type='email' value={email()} onInput={handleEmail} placeholder='email@company.com' required/>
                  </div>

              <button className='submit' type='submit'>Subscribe to monthly newsletter</button>
          </form>
      </div>
      </div>
        </div>}
        {submitted() === true &&
            <div className='submitted'>
            <img src='icon-success.svg' alt='success'/>
                <h1 className='title mt2 mb2'>Thanks for subscribing!</h1>
                <p>
                    A confirmation email has been sent to <span className='email-submitted'>{email()}</span>.
                    Please open it and click the button inside to confirm your subscription.
                </p>
                <button onClick={handleReturn} className='dismiss'>Dismiss message</button>
            </div>


        }
    </>
  )
}

export default App
