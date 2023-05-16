import React from 'react'
import Title from './Title'
import { ServiceList } from '../data/Data'

export default function Services() {
  return (
    <>
        <section className="section services" id="services">
      <Title title="Our" subTitle="Services" />
      <div className="section-center services-center">
        {ServiceList.map(list=>{
          return (
          <article className="service" key={list.data}>
            <span className="service-icon"><i className={list.iconText}></i></span>
            <div className="service-info">
              <h4 className="service-title">{list.title}</h4>
              <p className="service-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores, officia.
              </p>
            </div>
          </article>
          )
        })}
      </div>
    </section>
    </>
  )
}
