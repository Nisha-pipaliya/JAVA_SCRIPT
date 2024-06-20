const navbar = (login = "login", signup = "signup") => {
  return `
      <div id="navbar">
          <a href="../index.html">h${ome}</a>
          <a href="../pages/addproduct.html">${addproduct}</a>
          <a href="../pages/cart.html">${cart}</a>
          <a href="../pages/login.html">${login}</a>
          <a href="../pages/product.html">${product}</a>
          <a href="../pages/signup.html">${signup}</a>
             <a href="../pages/signup.html">${serch}</a>
          
      </div>
  `;
}

export default navbar;
