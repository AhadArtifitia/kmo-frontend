import "./OppertunitiesStyles.css";
import React from "react";

const Oppertunities = ({ careerSearch }) => {
  const [careers, setCareers] = React.useState([]);
  const token = localStorage.getItem("token");

  React.useEffect(() => {
    fetchAllCareer();
  }, []);

  const fetchAllCareer = async () => {
    await fetch("https://backend.kmokoduvally.com/api/admin/career", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (Array.isArray(res) && res?.length > 0) {
          setCareers(res);
        }
      });
  };

  const filteredCourses = careers.filter((item) =>
    item.level.toLowerCase().includes(careerSearch.toLowerCase())
  );

  return (
    <div className="oppertunities">
      <span style={{ display: "inline-block", textAlign: "left" }}>
        <h5 style={{ display: "inline-block", marginRight: "10px" }}>
          Fill in the form below to apply for your career in KMO Groups.
        </h5>
        <button
          style={{
            backgroundColor: "#007bff",
            color: "#ffffff",
            border: "none",
            padding: "10px 20px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onClick={() =>
            (window.location.href =
              "https://docs.google.com/forms/d/e/1FAIpQLSfm_MDHQinnYyMgfcD2hBaaibw00605hIR29FGkMVG7pioxog/viewform?vc=0&c=0&w=1&flr=0")
          }
        >
          Apply Now
        </button>
      </span>

      <table className="oppertunities-table">
        <tr className="oppertunities-table-tr">
          <th>OPENINGS</th>
          <th>LISTED DATE</th>
        </tr>

        {filteredCourses.map((career, index) => (
          <tr className="oppertunities-table-tr">
            <td>{career.level}</td>
            <td>{career.updated}</td>
          </tr>
          // <div class="list-group p-1">
          //   <a href="#" class="list-group-item list-group-item-secondary">{career.level}</a>
          // </div>
        ))}
      </table>
    </div>
  );
};

export default Oppertunities;
