const Hero = () => {
  return (
    <section className="hero-section d-flex align-items-center">
      <div className="container text-white">
        <h5 className="text-warning">WE ARE BUILDERS</h5>
        <h1 className="display-4 fw-bold">
          WE WILL BUILD YOUR DREAM
        </h1>
        <p className="lead mt-3">
          Whether you’re dreaming of a new structure or enhancing an existing space,
          Stronghold is here to make it happen.
        </p>
        <div className="mt-4">
          <button className="btn btn-warning me-3 px-4">Read More</button>
          <button className="btn btn-outline-light px-4">Reach Us</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
