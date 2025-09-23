import React from 'react';
import "./tag.css";
import { tagStyle, tagKeyMap } from "../../constant/common"
const Tag = (props) => {
            <Tag tagName="DEV" selectedTag={selectedTag} />
    const { tagName, selectedTag, selected } = props;
    
    const key = tagKeyMap[tagName];
    
  return (
    <>
        <button type="button" style={selected ? tagStyle[key] : {}} className='tag' onClick={() =>{
          selectedTag(tagName);
        }}
        >
         { tagName }
         
       </button>
    </>
  );
};

export default Tag;
