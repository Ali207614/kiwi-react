
import  './bottomLink.css'

const LinkTop = ({topLink , color}) => {
 return (
  <div className='links-div'>
      <div className={`arrow ${color}`}></div>
      <h3 className='top-link-info'>{topLink}</h3>
  </div>
 )
};

export default LinkTop ;