import { useState } from "react";

const Careers = () => {
  const [activeTab, setActiveTab] = useState("opening");

  return (
    <section className="career-section py-5">
      <div className="container">

        <div className="career-box">

          {/* Tabs */}
          <div className="career-tabs">
            <span
              className={activeTab === "opening" ? "active" : ""}
              onClick={() => setActiveTab("opening")}
            >
              CURRENT OPENING
            </span>

            <span
              className={activeTab === "upload" ? "active" : ""}
              onClick={() => setActiveTab("upload")}
            >
              UPLOAD CV
            </span>
          </div>

          {/* Content */}
          <div className="career-content mt-4">

            {activeTab === "opening" ? (
              <>
                <h4>Civil Site Supervisor</h4>
                <p><strong>Qualification:</strong> Diploma in Civil Engineering</p>
                <p><strong>Experience:</strong> "0–5 Years (freshers can apply)</p>

                <p className="career-desc">
                  Manage day-to-day site activities, coordinate with subcontractors,
                  ensure quality control, prepare bills, and oversee logistics.
                </p>

                <button className="career-btn">APPLY NOW</button>
              </>
            ) : (
              <>
                <p className="career-desc">
                  Upload your CV and get matched with new roles as soon as they become available.
                </p>

                <div className="upload-box mt-3">
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                  />
                </div>

                <button className="career-btn mt-3">
                  UPLOAD CV
                </button>
              </>
            )}

          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;