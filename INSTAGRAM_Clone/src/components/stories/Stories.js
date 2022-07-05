import storieframe from '../../imgs/profile_picture.jpeg'
import './Stories.css'



function Stories(){
return(
   <div className="box">
   <div className="storiesbox">
     <ul className='list'>

       <li className='storielsit'><img src={storieframe} alt='teste' className='storieframe'/><p>Henriq Arjo</p></li>
       <li className='storielsit'><img src={storieframe} alt='teste' className='storieframe'/><p>Lucas W</p></li>
       <li className='storielsit'><img src={storieframe} alt='teste' className='storieframe'/><p>Netinho Re</p></li>
       <li className='storielsit'><img src={storieframe} alt='teste' className='storieframe'/><p>Gordo Paiva</p></li>
       <li className='storielsit'><img src={storieframe} alt='teste' className='storieframe'/><p>Netinho </p></li>
       <li className='storielsit'><img src={storieframe} alt='teste' className='storieframe'/><p>Gordo Paiva</p></li>
       <li className='storielsit'><img src={storieframe} alt='teste' className='storieframe'/><p>Gordo Paiva</p></li>

     </ul>

 </div>

  </div>

  )}

  export default Stories;