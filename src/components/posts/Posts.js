import React from "react";

import "./Posts.css";
import Like from "../../icons/like.svg"
import Comments from "../../icons/comment.svg"
import Share from "../../icons/direct_old.svg"
import Save from "../../icons/save.svg"
import ThreeDots from "../../icons/three_dots.svg"
import smile from "../../icons/smile.svg"




function Posts({profile_picture,username, caption, imageUrl, liked_by, all_comments, hours_posted }) {
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
        <p>Curtido por <span>{liked_by[0]}</span> e <span>{liked_by[1]}</span></p>
        <div className="usuario">
          
        <span>{username}</span> {caption}
        </div>
        <p className="font_light">{all_comments}</p>
        <p className="font_light">{hours_posted}</p>
       <div className="comments_input">
       <div className="icon_comments" ><img className="smile" src={smile} alt='comments'/></div>
        <div className="comments"> <input type="text" name="name"  placeholder="Adicione um comentario"/></div>
        <div className="publish_comment"> <p>Publicar</p> </div>
       
        
        </div>
      </div>
    </div>
  );
}
  export default Posts;