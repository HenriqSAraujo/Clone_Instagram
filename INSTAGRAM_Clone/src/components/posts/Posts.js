import React from "react";
import profile_picture from '../../imgs/profile_picture.jpeg'
import "./Posts.css";
import Like from "../../icons/like.svg"
import Comments from "../../icons/comment.svg"
import Share from "../../icons/direct_old.svg"
import Save from "../../icons/save.svg"
import ThreeDots from "../../icons/three_dots.svg"









function Posts({username, caption, imageUrl }) {
  return (
    <div className="post">
      <div className="post__header">
        <div className="profile_nick">
        <img className="profile_picture" src={profile_picture} alt='foto_de_perfil' />
        <h3>{username}</h3>
        </div>
        <div className="threedots_postheader">
        <img src={ThreeDots} alt='three_dots'/>
        </div>
      </div>
      {/*  */}
      <img className="post__image" src={imageUrl} alt={caption} title={caption} />
      <div className="picture_footer">
        <div className="right_icons">
          <img className="like" src={Like} alt='Curtir' />
          <img className="comments" src={Comments} alt='Comentar' />
          <img className="share" src={Share} alt='Compartilhar' />
        </div>
        <div className="left_icons">
          <img className="save" src={Save} alt='Salvar' />
        </div>
      </div>
      <div className="comments_area">
        <p>Curtido por <span>NeymarJR</span> e <span>outras pessoas</span></p>
        <div className="usuario">
        <span>{username}</span> {caption}
        </div>
        <p className="font_light">Ver todos os 1.852 comentários</p>
        <p className="font_light">há 11 horas</p>
      </div>
   
    </div>
  );
}
  export default Posts;