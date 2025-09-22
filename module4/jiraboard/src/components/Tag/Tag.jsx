import React from 'react';
import "./tag.css";
const Tag = (props) => {
            <Tag tagName="DEV" selectedTag={selectedTag} />
    const { tagName, selectedTag } = props;
  return (
    <>
        <button type="button" className='tag' onClick={() =>{
          selectedTag(tagName);
        }}
        >
         { tagName }
         
       </button>
    </>
  );
};

export default Tag;
