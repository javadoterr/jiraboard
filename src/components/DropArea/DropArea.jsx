import React, { useState } from 'react'
import '../DropArea/DropArea.css';

const DropArea = ({onDrop}) => {
    const [showDrop, setShowDrop] = useState(false);

  return (
    <section className={showDrop ? 'drop-area' : 'hide-drop'}
        onDragEnter={()=>{setShowDrop(true)}}
        onDragLeave={() =>{setShowDrop(false)}}
        onDrop={() =>{
            onDrop();
            setShowDrop(false);
        }}
        onDragOver={e => e.preventDefault()}
        >
        Drop Area 
    </section>
  )
}

export default DropArea;