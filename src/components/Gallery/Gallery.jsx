

import styles from "./Gallery.module.css";

// import required modules
import img1 from "../../assets/gallery/winners.jpg"
import img4 from "../../assets/gallery/Screenshot_2021.png"
import img2 from "../../assets/gallery/car3.png"
import img3 from "../../assets/gallery/img5.jpg"
import img5 from "../../assets/gallery/2021.jpeg"
// import img3  from "../../assets/gallery/Screenshot_2021.png"

export default function Gallery() {


  return (
    <div className={styles.gal} id="Gallery">
      <h1 className="mb-md-5 mb-3 text-center text-light">Event Gallery</h1>
      <div id="carouselExampleCaptions" className={`carousel slide ${styles.carInner} m-auto`} data-bs-ride="carousel">

        <div className={`carousel-inner `}>
          <div className="carousel-item active">
            <img src={img1} className={`d-block w-100 ${styles.carImage}`} alt="..." />
            <div className={` carousel-caption  ${styles.carCap}`}>
              <h5>THE INITIAL STAGE !</h5>
              <p>23 Teams | 6 Finalists | Prize worth Rs.40,000
                <br />
                1st St. John | 2nd DJ Sanghvi | 3rd VCET</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={img2} className={`d-block w-100 ${styles.carImage}`} alt="..." />
            <div className={` carousel-caption  ${styles.carCap}`}>
              <h5>SECOND ANNUAL !</h5>
              <p>36 Teams | 8 Finalists | Prize worth Rs.40,000
                <br />
                1st Team Revamp | 2nd Team Droidbox | 3rd Team Elite++</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={img3} className={`d-block w-100 ${styles.carImage}`} alt="..." />
            <div className={` carousel-caption  ${styles.carCap}`}>
              <h5>THREE'S A CHARM !</h5>
              <p>
                40 Teams | 10 Finalists | Prize worth Rs.50,000<br/>
                1st Fr. Conceicao Rodrigues | 2nd DJ Sanghvi | c3rd DJ Sanghvi</p>
            </div>
          </div>

          <div className="carousel-item">
            <img src={img4} className={`d-block w-100 ${styles.carImage}`} alt="..." />
            <div className={` carousel-caption  ${styles.carCap}`}>
              <h5>EVEN THE PANDEMIC COULDN'T STOP US!</h5>
              <p>
                39 Teams | 138 Participants | 10 Finalists | Prize worth Rs.50,000<br/>
                1st LINKERS | 2nd NEURONS | 3rd UKKU
              </p>
            </div>
          </div>

          
          <div className="carousel-item">
            <img src={img5} className={`d-block w-100 ${styles.carImage}`} alt="..." />
            <div className={` carousel-caption  ${styles.carCap}`}>
              <h5>VCET HACKATHON 21 RELOADED !</h5>
              <p>
                39 Teams | 5 Finalists | Prize worth Rs.50,000<br/>
                1st ACCESS DENIED | 2nd UKKU | 3rd BREAKING CODE
              
              </p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
