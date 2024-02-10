import React from 'react'
import im1 from './assets/im1.jpg'
import im2 from './assets/im2.jpg'
import im3 from './assets/im3.jpg'
import im4 from './assets/im4.jpg'
import im5 from './assets/im5.jpg'


function Home() {
return (
	<div>
		<div>
			<h5 className='italic text-white bg-amber-900 p-0 m-0'>Get Plywood devliverd to your home connect your wallet and pay now</h5>
		</div>
		<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={im1} class="d-block w-100" alt="im2"/>
    </div>
    <div class="carousel-item">
      <img src= {im2} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src = {im3} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
	</div>
	)

}
export default Home


