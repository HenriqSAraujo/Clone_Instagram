import './Suggestions.css'
import storieframe from '../../imgs/profile_picture.jpeg'

function Suggestions({profile_picture,username,description}){
  return(
    <div className='suggestions_container'>
     <div className='suggestions_header'>
       <div className='teste'>
       <img src={storieframe} alt='tetse'/>
       <p className='username_'>henrique_silvaaraujo</p>
       </div>
       <p className='mudar'>Mudar</p>
     </div>
      <div className='suggestions-content'>
       <div className='left-suggestions'>
         <p> <span className='grey'><b>Sugestões para você</b></span> </p>
        
          <ul className='suggestions-ul'>
            <li ><img src={profile_picture[0]} alt='tetse'/>  <p >{username[0]}</p> </li>
            <li className='suggestions-li'>{description[0]}</li>
            <li ><img src={profile_picture[1]} alt='tetse'/>  <p >{username[1]}</p></li>
            <li className='suggestions-li'>{description[1]}</li>
            <li ><img src={profile_picture[2]} alt='tetse'/>  <p >{username[2]}</p></li>
            <li className='suggestions-li'>{description[0]}</li>
            <li ><img src={profile_picture[3]} alt='tetse'/>  <p >{username[3]}</p></li>
            <li className='suggestions-li'>{description[1]}</li>
          </ul>
         </div>  
         <ul className='right-suggestions'>
           <li>Ver tudo</li>
           <span>  <li>  Seguir </li>  </span>
           <span>  <li>  Seguir </li>  </span>
           <span>  <li>  Seguir </li>  </span>
           <span>  <li>  Seguir </li>  </span>
          
           </ul>       
        </div>
        <div className='suggestions-footer'>
          <p><a href='#'>Sobre</a> - <a href='#'>Ajuda</a> - <a href='#'>Imprensa</a> - <a href='#'>API</a> - <a href='#'>Carreiras</a> - <a href='#'>Privacidade</a> - <a href='#'>Termos</a> - <a href='#'>Localização</a> - <a href='#'>Idioma</a></p>
          <p>© 2022 INSTAGRAM FROM META</p>
        </div>
     </div>
    )}
  
    export default Suggestions;