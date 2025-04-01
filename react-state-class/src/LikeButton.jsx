import { useState } from 'react'

const LikeButton = () => {

    // let clicked = () => {
    //     console.log('clicked');
    // }

    const [isLiked, setIsLiked] = useState(false)
    const [clicks, setClicks] = useState(0)

    const toggleLike = () => {
        // console.log("We are trying to toggle");
        setIsLiked(!isLiked)
        setClicks(clicks + 1)
    }



  return (
    <div>
        {/* <p>LikeButton</p> */}

        {/* <p onClick={clicked}>
            <i className="fa-regular fa-heart"></i>
        </p> */}

        <p onClick={toggleLike}>
            {/* {isLiked.toString()} */}
            {/* <i className="far fa-heart"></i> */}

            {isLiked ? (
                <i style={{color: "red"}} className="fa-solid fa-heart"></i>
            ) : (
                <i className="fa-regular fa-heart"></i>
            )}
        </p>

        {/* <p>{clicks}</p> */}
    </div>
  )
}

export default LikeButton