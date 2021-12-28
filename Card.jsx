import React from 'react'

const Card = ({ email, first_name, last_name, avatar }) => {

  return (
    <>
      <div className="main3">
        <img src={avatar} class="card-img-top" alt={avatar} id="dp" />
        <div class="card-body">
          <h5 class="card-title">{first_name} {last_name}</h5>
          <p class="card-text">{email}</p>
          <a href="/" class="btn">Learn More</a>
        </div>
      </div>

    </>
  )
}

export default Card;