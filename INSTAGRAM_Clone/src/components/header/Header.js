

import like from '../../icons/like.svg'
import home from '../../icons/home.svg'
import direct from '../../icons/direct.svg'
import publish from '../../icons/publish.svg'
import explore from '../../icons/explore.svg'
import photo from '../../imgs/profile_picture.jpeg'
import './Header.css'


function Header(){
  return(
  <div className='nav'>
   <div className='navbox'>
    <img  src='https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png'  className='logo' alt='teste'/>
    <input type='text' className='search'  placeholder='Pesquisar'></input>
    <ul className='list'>
    <li className='iconList'><a href='https://youtube.com.br'><img src={home} alt='home button' className='icon'/></a></li>
    <li className='iconList'><a href='https://hyperscripts.com.br'><img src={direct} alt='direct button' className='icon'/></a></li>
    <li className='iconList'><a href='https://hyperscripts.com.br'><img src={publish} alt='publish button' className='icon'/></a></li>
    <li className='iconList'><a href='https://hyperscripts.com.br'><img src={explore} alt='publish button' className='icon'/></a></li>
    <li className='iconList'><a href='https://google.com.br' ><img src={like} alt='like button' className='icon'/></a></li>
    <li className='iconList'><a href='https://google.com.br' ><img src={photo} alt='like button' className='icon photo'/></a></li>    
    </ul>
    </div>
  </div>
  )}

  export default Header;