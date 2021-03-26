import React, {useState} from 'react';
import './footer.styles.scss';
import  FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';


const Footer = () =>{
    
    const [displayName,setdisplayName] = useState('');
    const [email,setEmail] = useState('');
    const [Text,setText] = useState('');
    
    
    const handleSubmit = (event) =>{
      
      event.preventDefault();
      console.log(displayName,email,Text);
  
    }

    return (
        <div className="Footer">
             <form className='contact-me' id="contact-me" onSubmit={handleSubmit}>
                <h2>Hire Me</h2>
                <FormInput
                type='text'
                name='displayName'
                value={displayName}
                onChange={ e => setdisplayName(e.target.value)}
                label='Name'
                required
                />
                <FormInput
                type='email'
                name='Email'
                value={email}
                onChange={e => setEmail(e.target.value)}
                label='Email'
                required
                />
                <FormInput
                type='text'
                name='Text'
                value={Text}
                onChange={e => setText(e.target.value)}
                textarea='Message'
                label='Message'
                required
                />
                <CustomButton type='submit'  submit radius15 w100 >Send</CustomButton>
            </form>
        </div>

    );
}

export default  Footer;