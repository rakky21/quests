import React from "react";

function Pregunta({ projectCards, titulos }) {
  return (
    <div className="projects_container">
      <h2 className="titles border-bottom">{titulos}</h2>
      <div>
        {projectCards.map((card) => (
          <div className="card-body" key={card.id}>
            <div className="card col" style={{ width: "18rem" }}>
              <h3 className="card-title">{card.name}</h3>
              <small className="card-text">{card.description}</small>
              <div>
                <a
                  className="btn"
                  href={card.href}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Open
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pregunta;
