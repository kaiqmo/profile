import './App.css';

import {useState} from 'react';

import CustomButton from '../src/components/custom-button/custom-button.component';
import FormInput from '../src/components/form-input/form-input.component';

function App() {

  const [displayName,setdisplayName] = useState('');
  const [email,setEmail] = useState('');
  const [Text,setText] = useState('');
  
  
  const handleSubmit = (event) =>{
    
    event.preventDefault();
    console.log(displayName,email,Text);

  }

  return (
    <div className="App">
      <header className="App-header">
        
      </header>
      <div className="body">
        <form className='contact-me' onSubmit={handleSubmit}>
          <h2>Manda uma mensagem :D</h2>
            <FormInput
            type='text'
            name='displayName'
            value={displayName}
            onChange={(e) => setdisplayName(e)}
            label='Nome'
            required
            />
            <FormInput
            type='text'
            name='email'
            value={email}
            onChange={(e) => setEmail(e)}
            label='Email'
            required
            />
            <FormInput
            type='text'
            name='Text'
            value={Text}
            onChange={(e)=> setText(e)}
            label='Texto'
            required
            />
            <CustomButton type='submit'>Send Message</CustomButton>
          </form>
      </div>
      <div className="footer">
        <h3>
          Tel: (14) 99779-2464
        </h3>
        <h3>
          Email: kaiqmo@gmail.com
        </h3>
        <h3>
          Github: /kaiqmo
        </h3>
      </div>
    </div>
  );
}

export default App;
