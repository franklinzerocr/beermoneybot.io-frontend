import React from 'react'
import ContainerMain from '../containers/ContainerMain';
import { MetaTags } from 'react-meta-tags';
import '../styles/Thanks.scss';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import image from '../assets/imgheader.jpg'
import loguito from '../assets/Logos/loguito.png'

const Thanks = () => {
  const navigate = useNavigate();
  const [counter, setCounter] = React.useState(4);
  let intervalRef = React.useRef();
  const decreaseNum = () => setCounter((prev) => prev - 1);
  React.useEffect(() => {
    intervalRef.current = setInterval(decreaseNum, 1000);
    return () => clearInterval(intervalRef.current);
  }, []);
  if (counter <= 0) {
    navigate('/')
  }

  return (
    <>
      <MetaTags>
        <title>Gracias | Beermoney Bot</title>
      </MetaTags>
      <ContainerMain>
        <section className='thanks-container'>
          <div className='thanks-container-aux'>
            <img src={image} alt="Beermoney Bot" loading='lazy' id='big-image' />
            <div className='thanks-container-aux-texts'>
              <p>¡Gracias por tu Contacto!</p>
              <p>Redireccionando en {counter}...</p>
              <Link to='/'><img src={loguito} alt="Beermoney Bot" className='loguito' /></Link>
            </div>
          </div>
        </section>
      </ContainerMain>
    </>
  )


}

export default Thanks
