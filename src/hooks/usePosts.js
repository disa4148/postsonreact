import { useMemo } from "react";

export const useSortedPosts = (posts, sort) => {
    const sortedPosts = useMemo(() => {
        if(sort) {
          return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]));
      } 
      return posts;
      }, [sort, posts]);

      return sortedPosts;
}


export const usePosts = (posts, sort, query) => {
    const sortedPosts = useSortedPosts(posts, sort);
    const sortedAndSearchedPosts = useMemo(()=>{
        return sortedPosts.filter(post => post.title.toLowerCase().includes(query))// Проверка на наличие (сравнение) символов в тайтле с введёнными данными поиска и вывод этих постов в результат ф-ции
      },[query, sortedPosts])

    return sortedAndSearchedPosts;
}

export default usePosts;

