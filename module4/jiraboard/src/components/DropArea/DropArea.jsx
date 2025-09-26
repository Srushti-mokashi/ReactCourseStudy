import React from 'react';
import "../DropArea/DropArea.css";

const DropArea = () => {

  const  [showDrop, setShowDrop] = useState(false);
  return 
    <section className={showDrop ? 'drop-area' :  '.hide-drop' } onDragEnter={() => {setShowDrop(true)}}
     onDragLeave={() => {setShowDrop(false)}}
     >
        DropArea
    </section>
  
};

export default DropArea;
