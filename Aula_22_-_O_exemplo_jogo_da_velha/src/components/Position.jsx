import React, {useEffect, useState} from 'react'
import empty from '../images/empty.gif'
import red from '../images/red.gif'
import white from '../images/white.git'

function Position(props) {
    const[myImage, setMyImage] = useState(() => {return empty})

    useEffect(()=>{
        if(props.matrix[props.id[0]][props.id[1]]===0){
            setMyImage(empty);
        }else if(props.matrix[props.id[0]][props.id[1]]===1){
          setMyImage(red);
        } else {
          setMyImage(white);
        }
    }, [props.matrix]);

    function handleClick(){
      props.onPositionClick(props.id);
    }

  return (
    <div clasName='position'>
      <img src={myImage} alt="posição"  onclick={handleClick}/>
    </div>
  )
}

export default Position