import FooterLinks from "./components/FooterLinks";
import Product from "./components/Product";

const PRODUCTS = [
  {
    name: "Cinnamoroll Ice Cream Plush",
    image: "https://i.ebayimg.com/images/g/9mUAAOSwYpJiqT1Y/s-l1200.jpg",
    price: "35"
  },
  {
    name: "Kuromi Plush",
    image: "https://m.media-amazon.com/images/I/418EjUduBQL._AC_UF894,1000_QL80_.jpg",
    price: "35"
  },
  {
    name: "Hello Kitty Plush",
    image: "https://i.ebayimg.com/images/g/9PcAAOSwztpiqYyQ/s-l1200.jpg",
    price: "30"
  },
  {
    name: "Keroppi Plush",
    image: "https://i.ebayimg.com/images/g/MaoAAOSwFQ5kxR8h/s-l1200.jpg",
    price: "30"
  },
  {
    name: "My Melody Plush",
    image: "https://i.ebayimg.com/images/g/snQAAOSwYmVgFQ3e/s-l1200.jpg",
    price: "25"
  },
  {
    name: "Pompompurin Plush",
    image: "https://i.ebayimg.com/images/g/4SwAAOSwRslkESxu/s-l1200.jpg",
    price: "25"
  }
]

function App() {

  const productList = PRODUCTS.map(product => <Product key={product.name} product={product}/>);

  return (
    <div className="app">
      <section id="content">
        <header>
          <div>
            <h1>Shop Mart</h1>
            <div>
              <button className="icon-btn"><span>&#129293;</span><span className="badge">2</span></button>
              <button className="icon-btn"><span>&#128722;</span><span className="badge">1</span></button>
            </div>
          </div>
          
          <div>
            <nav>
              <button>Home</button>
              <button>Catalog</button>
              <button>All products</button>
              <button>Wishlist</button>
            </nav>
            <form>
              <input type="search" placeholder="search" />
              <button type="button">Go</button>
            </form>
          </div>
          
        </header>
        <main>
          {productList}
        </main>
        
      </section>
      <footer>
        <div>
          <FooterLinks title="Our store" links={["About us", "Contact us", "Become a partner"]}/>
          <FooterLinks title="Our policies" links={["Refund policy", "Shipping policy", "Terms of service"]}/>
          <FooterLinks title="Our products" links={["Homepage", "Search", "Catalog"]}/>
        </div>

        <div>
          &copy; Yves Rene Shema, 2024
        </div>
        
      </footer>
    </div>
  );
}

export default App;
