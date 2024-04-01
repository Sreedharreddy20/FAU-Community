import React from 'react';

const CardComponent = () => {
  return (
    <div className="card">
      <img src="https://via.placeholder.com/500x200" className="card-img-top" alt="Card Image" />
      <div className="card-body">
        <h5 className="card-title">Card Heading</h5>
        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquet felis sit amet ante ultricies, et consequat nisi pretium.</p>
      </div>
      <div className="card-footer">
        <div className="row">
          <div className="col-6 text-start">
            <button className="btn btn-outline-secondary">
              <span className="fa fa-heart me-1"></span>
              Like
            </button>
          </div>
          <div className="col-6 text-end">
            <button className="btn btn-outline-secondary">
              <span className="fa fa-bookmark me-1"></span>
              Bookmark
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
