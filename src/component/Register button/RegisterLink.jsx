




import './RegisterButton.css'

const RegisterLink = ({ bottomText }) => {
    return (
     <div>
         <div className='row1 register-link-div'>
             <div className='bottom-div'/>
             <p className='bottom-or'>или</p>
             <div className='bottom-div'/>
         </div>
         <p className='bottom-text'>{bottomText}</p>

     </div>
    )
}

export default RegisterLink;