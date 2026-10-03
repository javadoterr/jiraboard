import React from 'react'
import './Tag.css';
import { tagStyle, tagKeyMap } from '../../constant/common';

const Tag = (props) => {
    const {tagName, selectedTag, selected} = props;
    const key = tagKeyMap[tagName];
  return (
    <>
        <button type='button'
          style={selected ? tagStyle[key] : {}}
          className='tag' 
          onClick={() =>{selectedTag(tagName)}}>
          {tagName}
        </button>
    </>
  )
}

export default Tag;