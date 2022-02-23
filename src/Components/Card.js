import React from 'react'

const Card = ({name,email}) => {
  return (
    <div className="bg-purple tc dib br3 pa3 ma2 grow bw2 shadow-5  ">
            <img alt='photos' src={`https://robohash.org/${email}?100x100`}/>
        <div>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    </div>
  )
}

export default Card