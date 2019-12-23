import React from 'react'
import Card from 'react-bootstrap/Card'

 const Platforms = (props) => {
 // console.log(props)
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
