import { Carousel } from "react-bootstrap";
import img1 from "../../assets/why1.jpg";
import img2 from "../../assets/why2.jpg";
import img3 from "../../assets/why3.jpg";
import img4 from "../../assets/why4.png";

const Why = () => {
  return (
    <section className="why-section py-5">
      <div className="container">
        <div className="row align-items-center">

          {/* LEFT - IMAGE CAROUSEL */}
          <div className="col-lg-7 mb-4">
            <Carousel indicators={true} controls={false}>
              <Carousel.Item>
                <img className="d-block w-100 why-img" src={img1} alt="slide1" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100 why-img" src={img2} alt="slide2" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100 why-img" src={img3} alt="slide3" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100 why-img" src={img4} alt="slide4" />
              </Carousel.Item>
            </Carousel>
          </div>

          {/* RIGHT - CONTENT BOX */}
          <div className="col-lg-5">
            <div className="why-content-box p-4">
              <ul className="why-list">
                <li>
                  Highly qualified technical and managerial professionals
                </li>
                <li>
                  Proven track record of completing projects on time and budget
                </li>
                <li>
                  Strong value engineering approach for cost efficiency
                </li>
                <li>
                  Strong network with architects, vendors and authorities
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Why;