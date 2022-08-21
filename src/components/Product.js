function Product() {
    const products = ['Teclado', 'Mouse', 'Board', 'Board'];
    const productslist = products.map((product, key)=> <h3 key={key}>{product}</h3>);
    return <div>{productslist}</div>;
}
export default Product;