import React, { useState } from 'react';
import Product from './Product';

interface IProductsProps {
    name: string;
    price: number;
}

const Products = (props: IProductsProps) => {

    const [products, setProducts] = useState<IProductsProps[]>([]);
    const [product, setProduct] = useState<IProductsProps>({} as IProductsProps);

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

    const handleRemove = (name: string) => {
        const newProducts = products?.filter(p => p.name !== name)
        setProducts(newProducts)
    }

    return (
        <section className="d-flex flex-column align-items-center">
            <h1> Products</h1>

            <form onSubmit={handleSubmit} >
                <input type="text" name="name" value={product?.name} onChange={handleChange} placeholder="Enter Product Name" required />
                <input type="number" name="price" value={product?.price} onChange={handleChange} placeholder="Enter Product Price" />
                <input type="submit" className="" />
            </form>

            <div className="">
                {
                    products?.map((pro) => <Product key={pro?.name} name={pro?.name} price={pro?.price} handleRemove={handleRemove} />)
                }
            </div>

        </section>
    );
};

export default Products;
