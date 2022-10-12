import React, { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import PostService from '../API/PostService';
import Loader from '../components/UI/Loader/Loader';
import {useFetching} from '../hooks/useFetching';

export const PostIdPage = () => {

  const params = useParams()
  const [post, setPost] = useState({})
  const [comments, setComments] = useState([])
  
  const [fetchPostbyId, isLoading, error] = useFetching( async (id)  => {
    const response = await PostService.getById(id)
    setPost(response.data); 
  })

  const [fetchComments, isCommentsLoading, commentsError] = useFetching( async (id)  => {
    const response = await PostService.getCommentsById(id)
    setComments(response.data); 
  })

  useEffect(() => {
    fetchPostbyId(params.id)
    fetchComments(params.id)
  }, [])
  
  return (
    <div style={{display: "flex", justifyContent: "center", flexDirection: "column", maxWidth: "1280px", marginTop:"50px"}}>
      <h1>Страница: {params.id}</h1>
      {isLoading
        ? <Loader/>
        : <h3>{post.id}.{post.title}.{post.body}</h3>
      }
      <h1 style={{marginTop: '35px'}}> Комментарии: </h1>
      {isCommentsLoading
        ? <Loader/>
        : <div>
          {comments.map( comment => 
            <div key={comment.id} style={{marginTop: "15px"}}>
                <h4>{comment.email}</h4>
                <h4>{comment.body}</h4>
            </div>
            )}
          </div>
      }
    </div>
  )
}

export default PostIdPage