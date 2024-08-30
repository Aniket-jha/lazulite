import React from 'react'
import "./Home.css"

const BrandList = ({images,speed}) => {
    console.log(images)
  return (
    <div className="inner">
    <div className="wrapper">
      <section style={{ "--speed": `${speed}ms` }}>
        {images.map(({ id, image,link }) => (
          <a href={link}>
          <div className="homeImage" key={id}>
            <img  src={image} alt={id} />
          </div>
          </a>
        ))}
      </section>
      <section style={{ "--speed": `${speed}ms` }}>
        {images.map(({ id, image, link }) => (
          <a href={link}>
          <div className="homeImage" key={id}>
            <img  src={image} alt={id} />
          </div>
          </a>
        ))}
      </section>
      <section style={{ "--speed": `${speed}ms` }}>
        {images.map(({ id, image, link }) => (
          <a href={link}>
          <div className="homeImage" key={id}>
            <img  src={image} alt={id} />
          </div>
          </a>
        ))}
      </section>
    </div>
  </div>
  )
}

export default BrandList