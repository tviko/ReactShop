function Cart(props) {
  const { quanitity = 0, handleBasketShow = Function.prototype } = props;

  return (
    <div className="cart white-text lighten-2" onClick={handleBasketShow}>
      <i className="material-icons">shopping_basket</i>
      {quanitity ? <span className="cart-quantity">{quanitity}</span> : null}
    </div>
  );
}

export { Cart };
