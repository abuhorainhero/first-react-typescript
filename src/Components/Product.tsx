import React from 'react';

interface IProductProps {
  name: string;
  price?: number;
  handleRemove: (name: string) => void;
}

const Product = ({ name, price, handleRemove }: IProductProps) => {
  return (
    <div className="card my-2" style={{ width: "28rem" }}>
      <div className="card-body">
        <h4 className="card-title">{name}</h4>
        <h5 className="card-text">{price}</h5>

        <button onClick={() => handleRemove(name)} className="btn btn-danger form-control">REMOVE</button>
      </div>

    </div>
  );
};

export default Product;
