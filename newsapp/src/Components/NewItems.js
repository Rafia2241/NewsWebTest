import React from 'react'

const NewItems =(props)=> {

    let {title, description , imageurl, newsurl, author , date} = props;
    return (
      <div>
        <div className="my-3">
        <div className="card" style={{width: '18rem'}}>
        <img src={!imageurl?"https://images.unsplash.com/photo-1708432683889-c3133790465f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D":imageurl} className="card-img-top" alt="..." />
        <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text"><small className="text-muted">By {!author?"unknown":author} on {new Date(date).toGMTString()}</small></p>
        <a rel="noreferrer" href={newsurl} target = "_blank" className="btn btn-sm  btn-dark">Read more ... </a>
        </div>
        </div>
        </div>
      </div>
    )
  
}

export default NewItems
