import React, {useState} from 'react'
import { MyButton } from './UI/Button/MyButton';
import { MyInput } from './UI/Input/MyInput';

export const PostForm = ({create}) => {
    const [post, setPost] = useState({title:'', body:''})

    const addNewPost = (event) => {
        event.preventDefault();
        const newPost = {...post, id:Date.now()}
        create(newPost)
        setPost({title:'', body:''})
    }

  return (
    <form style={{display: 'flex', flexDirection: 'column'}}>
        <MyInput value={post.title}  onChange={event =>setPost({...post, title: event.target.value})} placeholder="Заголовок"/>
        <MyInput value={post.body}  onChange={event =>setPost({...post, body: event.target.value})} placeholder="Описание"/>
        <MyButton onClick={addNewPost}>Загрузить</MyButton> 
    </form>
  )
}

export default PostForm