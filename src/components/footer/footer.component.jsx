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
                <CustomButton type='submit' >Send Message</CustomButton>
            </form>
            <div className="media">
                <h3>Github: /kaiqmo</h3>
            </div>
        </div>

    );
}

export default  Footer;