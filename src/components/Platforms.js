import React from 'react'
// import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card'
// import CardColumns from 'react-bootstrap/CardColumns'
// import CardDeck from 'react-bootstrap/CardDeck'
// import CardGroup from 'react-bootstrap/CardGroup'

 const Platforms = (props) => {

  return (
    <div className="platforms-container">
      <h4>My Platforms</h4>

      {props.platforms.map(platform =>
        <Card className="text-center" border="light" style={{ width: '18rem' }}>
          <Card.Img className="card-image" key={platform.id} variant="bottom" src={platform.image} alt="platform-logo"  />
          <Card.Link className="text-muted" href={`/platforms/${platform.id}`}>{platform.name}</Card.Link>
        </Card>
      )}

    </div>
  )

}

export default Platforms
