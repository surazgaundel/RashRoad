import React from 'react'
import { TourDist } from '../data/Data'
import Title from './Title'


export default function Tours() {
  return (
  <>
    <section className="section" id="tours">
      <Title title='featured' subTitle='tours'/>
      <div className="section-center featured-center">
        {TourDist.map(dist=>{
          return(
          <article className="tour-card" key={dist.id}>
            <div className="tour-img-container">
              <img src={dist.imgSrc} className="tour-img" alt="" />
              <p className="tour-date">{dist.tourDate}</p>
            </div>
            <div className="tour-info">
              <div className="tour-title">
                <h4>{dist.tourTitle}</h4>
              </div>
              <p>
              {dist.tourDesc}
              </p>
              <div className="tour-footer">
                <p>
                  <span><i className="fas fa-map"></i></span>{dist.Country}
                </p>
                <p>{dist.daySpent} days</p>
                <p>from ${dist.package}</p>
              </div>
            </div>
          </article>
          )
        })}
      </div>
    </section>
  </>
  )
}
