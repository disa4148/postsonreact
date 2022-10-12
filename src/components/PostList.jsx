import React from 'react'
import { Postitem } from './Postitem';
import { TransitionGroup } from 'react-transition-group';
import { CSSTransition } from 'react-transition-group';
export const PostList = ({posts, title, remove}) => {
  
    if (!posts.length) {
      return <h1 className='header' style={{textAlign: 'center'}}>Постов не существует!</h1>
    }
  return (
    <div>
      <TransitionGroup>
        <h1 className='header' style={{textAlign: "center"}}>{title}</h1>
        
        {posts.map((post, index) =>
          <CSSTransition
          key={post.id}
          timeout={500}
          classNames="post"
          >
          <Postitem remove={remove} number={index + 1} post={post}/>
          </CSSTransition>
        )}

      </TransitionGroup>
      
    </div>
  );

}

export default PostList;