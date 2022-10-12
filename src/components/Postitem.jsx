import React, { useEffect } from 'react'
import { MyButton } from './UI/Button/MyButton';
import { useNavigate } from 'react-router-dom';

export const Postitem = (props) => {
  const routes = useNavigate();
  function transitToPost(id) {
    routes("/posts/"+(id), { replace: true })
  }
  return (

<div className='post'>
    <div className='postContent'>
        <div className='title'>
            <strong>{props.post.id}. {props.post.title}</strong>
        </div>
        <div className="body">{props.post.body}</div>
    </div>
    <div class="post__btns">
      <MyButton onClick={() => props.remove(props.post)}>Удалить</MyButton>
      <MyButton onClick={() => transitToPost(props.post.id)}>Открыть</MyButton>
    </div>
</div>
    
  )
}

export default Postitem;