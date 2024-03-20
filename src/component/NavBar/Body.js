import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import BarChart from '../BarChart';
import Diposites from '../Diposits'
function Body() {
  return (
    <div className='flex flex-row  p-3 items-center gap-1 '>
  <div className=' p-5 pt-5 h-50 w-50 border-radius: 0.125rem rounded-xl'>
    <Carousel>
      <Carousel.Item>
        <img className='d-block w-100 rounded-lg' src='https://wallpaperaccess.com/full/1092587.jpg' alt=''/>
        <Carousel.Caption>
        <h3>Website Analytics</h3>
          <p>Total 28.5% Conversion Rate</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
       <img className='d-block w-100 rounded-lg' src='https://wallpaperaccess.com/full/1092587.jpg'/>
        <Carousel.Caption>
          <h3>Website Analytics</h3>
          <p>Total 28.5% Conversion Rate</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className='d-block w-100 rounded-lg' src='https://wallpaperaccess.com/full/1092795.jpg'/>
        <Carousel.Caption>
        <h3>Website Analytics</h3>
          <p>Total 28.5% Conversion Rate</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    <div className='p-5 m-2 h-72 w-72 border-radius: 0.125rem rounded-xl border-2 '>
      <Diposites />
     
      
    </div>
    <div className='p-5 m-2 h-72 w-72 border-radius: 0.125rem rounded-xl border-2'>
      <Diposites />
    </div>
    </div>
  );
}



export default Body;


