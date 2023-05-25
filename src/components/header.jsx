function Header() {
  return (
    <nav>
      <div className="nav-wrapper purple darken-3">
        <div className="container">
          <a href="/" className="brand-logo">
            React Shop
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="https://tviko.github.io/ReactShop/">Repository</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export { Header };
