import './Stories.css'



function Stories({profile_picture, username}){
return(
   <div className="box">
   <div className="storiesbox">
     <ul className='list'>

       <li className='storielsit'><img src={profile_picture[0]} alt='teste' className='storieframe'/><p>{username[0]}</p></li>
       <li className='storielsit'><img src={profile_picture[1]} alt='teste' className='storieframe'/><p>{username[1]}</p></li>
       <li className='storielsit'><img src={profile_picture[2]} alt='teste' className='storieframe'/><p>{username[2]}</p></li>
       <li className='storielsit'><img src={profile_picture[3]} alt='teste' className='storieframe'/><p>{username[3]}</p></li>
       <li className='storielsit'><img src={profile_picture[4]} alt='teste' className='storieframe'/><p>{username[4]}</p></li>
       <li className='storielsit'><img src={profile_picture[5]} alt='teste' className='storieframe'/><p>{username[5]}</p></li>
       <li className='storielsit'><img src={profile_picture[6]} alt='teste' className='storieframe'/><p>{username[6]}</p></li>

     </ul>

 </div>

  </div>

  )}

  export default Stories;