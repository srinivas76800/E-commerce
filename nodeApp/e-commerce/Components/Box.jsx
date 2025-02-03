export default function FourBox() {
    const boxStyle ={
         maxWidth: "18rem"
    }
    return(
    <div className="container  mx-auto my-5 gap-4 row ">
          <div style={boxStyle} className="card border-0 bg-light col-12 col-md-6 col-sm-12 mx-auto shadow">
            <div className="card-body">
              <h5 className="card-title">2 Day's delivery</h5>
              <p className="card-text">Get your order delivered to your doorstep at the earliest from FreshCart pickup stores near you.</p>
            </div>
          </div>
          <div style={boxStyle} className="card border-0 bg-light col-12 col-md-6 col-sm-12 mx-auto shadow">
            <div className="card-body">
              <h5 className="card-title">Best Prices & Offers</h5>
              <p className="card-text">Cheaper prices than your local shops, great cashback offers to top it off. Get best pricess & offers.</p>
            </div>
          </div>
          <div style={boxStyle} className="card border-0 bg-light col-12 col-md-6 col-sm-12 mx-auto shadow">
            <div className="card-body">
              <h5 className="card-title">Wide Assortment</h5>
              <p className="card-text">Choose from 5000+ products across Phones, laptops, household, veg and non-veg & other categories.</p>
            </div>
          </div>
          <div style={boxStyle} className="card border-0 bg-light col-12 col-md-6 col-sm-12 mx-auto shadow">
            <div className="card-body">
              <h5 className="card-title">Easy Returns</h5>
              <p className="card-text">Not satisfied with a product? Return it at the doorstep & get a refund within hours. No questions asked </p>
            </div>
          </div>
          <div style={boxStyle} className="card border-0 bg-light col-12 col-md-6 col-sm-12 mx-auto shadow">
            <div className="card-body">
              <h5 className="card-title">Deals Every Day</h5>
              <p className="card-text">Save big with our incredible daily deals, where you'll find discounts on all your favorite products. <a href="#dc" className="text-success">policy.</a></p>
            </div>
          </div>
          <div style={boxStyle} className="card border-0 bg-light col-12 col-md-6 col-sm-12 mx-auto shadow">
            <div className="card-body">
              <h5 className="card-title">Shop More, Spend Less</h5>
              <p className="card-text">Discover the joy of savings with our amazing price cuts and limited-time offers.</p>
            </div>
          </div>
        </div>
        );
}