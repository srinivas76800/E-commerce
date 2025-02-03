import React from 'react'

const Two = () => {
    return (
        <div className="my-5 d-flex flex-row justify-content-evenly row">
          <div className="card p-1 shadow text-light col-lg-5 col-md-5 col-sm-10 my-2 overflow-hidden">
          <img src='props.img1' className="card-img" alt="..."/>
            <div className="card-img-overlay text-start">
              <h5 className="card-title text-dark fw-bold">props.h</h5>
              <p className="card-text text-dark fw-bold">props.offer1</p>
              <button className="btn btn-success btn-sm">Shop Now</button>
            </div>
          </div>
          <div className="card p-1 shadow text-white col-lg-5 col-md-5 col-sm-10 my-2 overflow-hidden">
            <img src='props.img2' className="card-img" alt="..."/>
            <div className="card-img-overlay text-start">
              <h5 className="card-title text-dark fw-bold">props.h2</h5>
              <p className="card-text text-dark fw-bold">props.offer2</p>
              <button className="btn btn-success btn-sm">Shop Now</button>
            </div>
          </div>
        </div>
    )
}

export default Two