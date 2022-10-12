import React, {useState, useEffect, useMemo}  from 'react';

// Components
import { PostFilter } from '../components/PostFilter';
import PostService from '../API/PostService';
import { PostList } from '../components/PostList';
import PostForm from '../components/PostForm';

// UI
import { MyModal } from '../components/UI/MyModal/MyModal';
import { MyButton } from '../components/UI/Button/MyButton';
import { Loader } from '../components/UI/Loader/Loader';
import { Pagination } from '../components/UI/Pagination/Pagination';

// Hooks
import { usePosts } from '../hooks/usePosts';
import { useFetching } from '../hooks/useFetching';

// Styles


// Utilities
import { getPageCount } from '../utils/page';



function Posts() {

// States
const [posts, setPosts] = useState([]);
const [filter, setFilter] = useState({sort: '', query: ''});
const [modal, setModal] = useState(false);
const [totalPages, setTotalPages] = useState(0);
const [limit, setLimit] = useState(10);
const [page, setPage] = useState(1);


// Variables
const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);


//Functions 
const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
}

const removePost = (post) => {
  setPosts(posts.filter(p => p.id !== post.id))
}

const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
  const response = await PostService.getAll(limit, page);
  setPosts(response.data);
  const totalCount = response.headers['x-total-count'];
  setTotalPages(getPageCount(totalCount, limit));
})

const changePage = (page) => {
  setPage(page)
  fetchPosts(limit, page)
};

useEffect(() => {fetchPosts(limit, page)}, []);



return (
    <div className="App">
      <MyButton style={{marginTop: '20px'}} onClick={() => setModal(true)}>Создать пост</MyButton>
      <MyModal visible={modal} setVisible={setModal}> 
        <PostForm  create={createPost}/>
      </MyModal>
      <hr style={{margin: '15px 0'}}/>
      <PostFilter filter={filter} setFilter={setFilter}/>

      { postError && //Вывод ошибок
        <h1 style={{textAlign: 'center'}}>Паламафся... ( {postError} )</h1>
      }

      {isPostsLoading
      ? <div><Loader/></div>
      : <PostList remove={removePost} posts={sortedAndSearchedPosts} title={'Список постов:'}/>
      }
      <Pagination page={page} changePage={changePage} totalPages = {totalPages}/>
    </div>
  );
}

export default Posts;
