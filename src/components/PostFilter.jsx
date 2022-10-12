import React from 'react'
import { MyInput } from './UI/Input/MyInput';
import { MySelect } from './UI/Select/MySelect';

export const PostFilter = ({filter, setFilter}) => {
  return (
    <div>
        <MyInput style={{marginTop: '15px'}}placeholder="Поиск" value={filter.query} onChange={event => setFilter({...filter, query: event.target.value})}/><br/>
        <MySelect
            value={filter.sort}
            onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
            defaultValue='Сортировка по'
            options={[
            {value: 'title', name: 'По названию'},
            {value: 'body', name: 'По описанию'},
            ]}
        />
  </div>
  )
}
export default PostFilter