import React, {useEffect, useState} from 'react'
import empty from '../images/empty.gif'
import red from '../images/o.svg'
import white from '../images/x.svg'

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
    <div className='position'>
      <img src={myImage} alt="posição"  onClick={handleClick}/>
    </div>
  )
}

export default Position