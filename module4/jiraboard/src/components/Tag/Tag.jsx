import React from 'react';
import "./tag.css";
const Tag = (props) => {
            <Tag tagName="DEV" selectedTag={selectedTag} />
    const { tagName, selectedTag, selected } = props;
    const tagStyle={
      DEV:{backgroundColor:"#0458ff"},
      QA:{backgroundColor:"#ff2e04"},
      PO:{backgroundColor:"#04ff2a"},
    };
    const tagKeyMap = {
      "DEV": "DEV",
      "QA": "QA",
      "Product Owner": "PO",
    };
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
