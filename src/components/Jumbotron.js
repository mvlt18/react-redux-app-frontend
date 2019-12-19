import React from 'react';
import {Jumbotron as Jumbo, Container} from 'react-bootstrap'
import styled from 'styled-components'
import mainImage from '../assets/mainImage.jpg'

const Styles = styled.div`
  .jumbo {
    background: url(${mainImage}) no-repeat fixed bottom;
    background-size: cover;
    color: #efefef;
    height: 250px;
    position: relative;
    z-index: -2;
  }

  .overlay{
    background-color: #eee;
    opacity: 0.2;
    position: absolute;
    top:0;
    left:0;
    bottom:0;
    right:0;
    z-index: -1;
  }

  .mainText{
    align: center;
  }
`;

const Jumbotron = () => {
  return(
    <Styles>
      <Jumbo fluid className="jumbo">
      <div className="overlay">
      </div>
      <Container>
      <h2 className="mainText"> keep learning. keep growing. </h2>
      <h3> manage it from one place. </h3>

      </Container>
      </Jumbo>

    </Styles>
  )
}

export default Jumbotron
