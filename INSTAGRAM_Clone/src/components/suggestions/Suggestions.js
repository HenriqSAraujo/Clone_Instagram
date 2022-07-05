import './Suggestions.css'
import storieframe from '../../imgs/profile_picture.jpeg'

function Suggestions(){
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
         <p>Sugestões para você</p>
          <ul className='suggestions-ul'>
            <li ><img src={storieframe} alt='tetse'/> <p>TSATSDDADS</p> </li>
            <li className='suggestions-li'>a_anne_zintl</li>
            <li ><img src={storieframe} alt='tetse'/></li>
            <li className='suggestions-li'>a_anne_zintl</li>
            <li ><img src={storieframe} alt='tetse'/></li>
            <li className='suggestions-li'>a_anne_zintl</li>
            <li ><img src={storieframe} alt='tetse'/></li>
            <li className='suggestions-li'>a_anne_zintl</li>
          </ul>
         </div>  
         <ul className='right-suggestions'>
           <li>Seguir</li>
           <li>Seguir</li>
           <li>Seguir</li>
           <li>Seguir</li>
          
           </ul>       
        </div>
        <div className='suggestions-footer'>
          <p><a href='#'>Sobre</a> ・ <a href='#'>Ajuda</a> ・ <a href='#'>Imprensa</a> ・ <a href='#'>API</a> ・ <a href='#'>Carreiras</a> ・ <a href='#'>Privacidade</a> ・ <a href='#'>Termos</a> ・ <a href='#'>Localização</a> ・ <a href='#'>Idioma</a></p>
          <p>© 2022 INSTAGRAM FROM META</p>
        </div>
     </div>
    )}
  
    export default Suggestions;