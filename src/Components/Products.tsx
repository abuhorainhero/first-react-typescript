import React, { useState } from 'react';

interface IProductsProps {

}

const Products = (props: IProductsProps) => {

    const [products, setProducts] = useState<object[]>([]);
    const [product, setProduct] = useState({
        name: "",
        price: 0,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProduct({ ...product, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        setProducts([...products, product]);
        setProduct({
            name: "",
            price: 0,
        })
    }

    console.log(product)
    console.log(products)

    return (
        <section className="">
            <h1> Products</h1>

            <form onSubmit={handleSubmit} >
                <input type="text" name="name" value={product?.name} onChange={handleChange} />
                <input type="number" name="price" value={product?.price} onChange={handleChange} />
                <input type="submit" />
            </form>

            <div className="">
                {

                }
            </div>

        </section>
    );
};

export default Products;
