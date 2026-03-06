import { useNavigate } from "react-router-dom";

const Testimonials = () => {
  const navigate = useNavigate();

  const handleViewMore = () => {
    window.open(
      "https://www.google.com/search?sca_esv=f180e763fe85dffa&sxsrf=ANbL-n7Zi5yF2TzoRxRucHdp5dHECXXXnQ:1771924865301&q=fly+fitness+club&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOeLgO3h5Wm2wbV0l-F1q3EqOx18__bTK9h4AbgJRSmXMAOpsXni3Zu2n3dMtC2S-9bldswNBfqDk3vW3ikFUqI-VU8t1VCF7xr--yBigi6TQQms3VA%3D%3D&sa=X&ved=2ahUKEwiq0ajB5vGSAxVlR2wGHUiPL7QQrrQLegQIHxAA&biw=1536&bih=731&dpr=1.25",
      "_blank"
    );
  };

  return (
    <section className="testimonials-section py-5 text-center">
      <div className="container">
        <h2 className="mb-5">
          — WHAT OUR <span className="text-warning">CLIENTS SAY</span> ABOUT US —
        </h2>

        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="testimonial-card">
              <h5>Mr. Renji Sebastian</h5>
              <p className="text-warning">Palikkaparambil</p>
              <p>
                Thank you Stronghold for the completion of my warehouse at
                Malaparamba (Calicut) and for giving me big savings on
                construction costs with your timely advice.
              </p>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className="testimonial-card">
              <h5>Mr. Kevin Richards & Family</h5>
              <p className="text-warning">Pantheerankave</p>
              <p>
                We wish Stronghold and team all the best for their future.
                Let God help them complete many more homes like ours and fulfill
                the dreams of many.i realy love this journey
              </p>
            </div>
          </div>
        </div>

        <button
          className="btn btn-warning mt-4"
          onClick={handleViewMore}
        >
          View More
        </button>
      </div>
    </section>
  );
};

export default Testimonials;