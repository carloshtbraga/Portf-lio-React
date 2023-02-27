import React, { useState } from "react";
import { technologies } from "../services/variables";

import "../styles/components/technologiescontainer.sass";

function TechnologiesContainer({ theme, en }) {
 
  const [search, setSearch] = useState("");
  const [selectedType, setSelectedType] = useState("");

  const filtered = technologies.filter((tech) => {
    const nameMatch = tech.name.toLowerCase().includes(search.toLowerCase());
    const typeMatch = selectedType ? tech.type === selectedType : true;
    return nameMatch && typeMatch;
  });

  const techTypes = {};

  const techOptions = technologies.map((tech) => {
    if (!techTypes.hasOwnProperty(tech.type)) {
      techTypes[tech.type] = true;
      return <option key={tech.name}>{tech.type}</option>;
    }
    return null;
  });

  return (
    <section
      className={
        theme === "dark"
          ? "technologies-container"
          : "technologies-containerlight"
      }
    >
      <h2>{en === 'no' ? 'Tecnologias' : 'Technologies'}</h2>
      <div>
        <label htmlFor="oi">
          <input
            type="text"
            id="oi"
            onChange={({ target: { value } }) => setSearch(value)}
            value={search}
            placeholder={en === 'no' ? "Pesquise pelo nome da tecnologia" : 'Type the technology name'}
          />
        </label>
        <select
          name=""
          id=""
          onChange={({ target }) => setSelectedType(target.value)}
          value={selectedType}
        >
            <option value="" style={{ color: "gray" }}>Todos</option>
          {techOptions}
        </select>
      </div>
      <br />
      <div className="technologies-grid">
        {filtered.map((tech) => (
          <div className="technology-card" id={tech.name} key={tech.name}>
            <img src={tech.icon} alt={tech.name} />
            <div className="technology-info">
              <h3>{tech.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TechnologiesContainer;
