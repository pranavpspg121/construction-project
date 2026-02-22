import { useState } from "react";

const leaders = [
  {
    name: "Bijeesh",
    role: "Engineer / Operations Head",
    description:
      "With over 5 years of experience in construction and engineering, Bijeesh leads Stronghold’s project planning and execution. His expertise ensures technical precision, safety, and timely completion of projects.",
    phone: "+91 9447019259",
    email: "bijeesh@stronghold.com",
    image: "https://via.placeholder.com/250"
  },
  {
    name: "Abhin",
    role: "Engineer / Projects Head",
    description:
      "Abhin specializes in structural execution and project supervision. His engineering background and field knowledge ensure Stronghold maintains high quality standards across all projects.",
    phone: "+91 9876543210",
    email: "abhin@stronghold.com",
    image: "https://via.placeholder.com/250"
  },
  {
    name: "Shibu",
    role: "Operations & All-in-All",
    description:
      "Shibu manages coordination, client relations, and operational flow. His leadership and management ensure Stronghold runs smoothly and efficiently as a family-driven company.",
    phone: "+91 9123456789",
    email: "shibu@stronghold.com",
    image: "https://via.placeholder.com/250"
  }
];

const Leaders = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section className="leaders-section py-5">
      <div className="container">

        {/* ===== TITLE ===== */}
        <div className="text-center mb-5">
          <h1 className="leaders-title">
            <span className="line"></span>
            <span className="text-warning mx-2">WHO LEAD</span>
            <span className="fw-bold">STRONGHOLD</span>
            <span className="line"></span>
          </h1>
        </div>

        {/* ===== LEADERS LIST ===== */}
        {leaders.map((leader, index) => (
          <div className="row align-items-center leader-row mb-5" key={index}>
            
            <div className="col-md-3 text-center">
              <img
                src={leader.image}
                alt={leader.name}
                className="leader-img"
              />
            </div>

            <div className="col-md-9">
              <h3 className="text-warning">{leader.name}</h3>
              <p className="fw-bold">{leader.role}</p>
              <p>{leader.description}</p>

              <button
                className="business-btn"
                onClick={() => setSelected(leader)}
              >
                BUSINESS CARD
              </button>
            </div>

          </div>
        ))}

      </div>

      {/* ===== MODAL ===== */}
      {selected && (
        <div className="card-modal">
          <div className="card-content">

            <h2 className="text-warning fw-bold">{selected.name}</h2>
            <p>{selected.role}</p>
            <p>Stronghold Construction</p>
            <p>{selected.phone}</p>
            <p>{selected.email}</p>

            <button
              className="close-btn"
              onClick={() => setSelected(null)}
            >
              CLOSE
            </button>

          </div>
        </div>
      )}
    </section>
  );
};

export default Leaders;