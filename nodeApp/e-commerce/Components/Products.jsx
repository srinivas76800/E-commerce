import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Mobile from './Mobile'
import Computers from './Computers'
import Watch from './Watch'
import Tv from '@/Components/Tv'
import Toys from '@/Components/Toys'
import Kinchen from '@/Components/Kichen'
import Women from '@/Components/Women'
import Men from '@/Components/Men'
import Box from '@/Components/Box'
import Two from '@/Components/Two';

const Products = () => {
  return (
    <>
      <div className=" container my-3" >
        <div id="carouselExampleCaptions" className=" carousel slide carousel-fade" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          </div>
          <div className="carousel-inner shadow">
            <div className=" carousel-item active rounded-4">
              <img src="https://images.vexels.com/content/194700/preview/buy-online-slider-template-4261dd.png" className="text-dark d-block w-100 rounded-4" alt="v1" />
            </div>
            <div className="carousel-item">
              <img src="https://images.vexels.com/content/194698/preview/shop-online-slider-template-4f2c60.png" className=" text-dark d-block w-100 rounded-4" alt="v2" />
            </div>
          </div>
        </div>
      </div>
      <Mobile />
      <Computers />
      <Two/>
      <Watch />
      <Tv />
      <Toys />
      <Two/>
      <Kinchen />
      <Women />
      <Men />
      <Box/>
    </>
  )
}

export default Products