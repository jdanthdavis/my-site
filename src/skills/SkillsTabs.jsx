import React, { useState, useMemo } from "react";
import {
  skillCategories,
  AboutText,
  interestBubbles,
  skillsBubbles,
} from "../data/skillsData.jsx";
import BubbleGrid from "../bubble/BubbleGrid.jsx";
import "./SkillsTabs.scss";

const sizes = ["medium", "large"];

const SkillsTabs = () => {
  const [activeTab, setActiveTab] = useState(skillCategories[0].id);

  const randomizedSkills = useMemo(() => {
    if (activeTab === "technical") {
      return skillsBubbles.map((skill) => ({
        ...skill,
        size: sizes[Math.floor(Math.random() * sizes.length)],
      }));
    }
    return [];
  }, [activeTab]);

  const randomizedInterests = useMemo(() => {
    if (activeTab === "interests") {
      return interestBubbles.map((bubble) => ({
        ...bubble,
        size: sizes[Math.floor(Math.random() * sizes.length)],
      }));
    }
    return [];
  }, [activeTab]);

  const filteredSkills = randomizedSkills.filter(
    (skill) => skill.category === activeTab,
  );

  const getTextContent = () => {
    if (activeTab === "about") return <AboutText />;
    return null;
  };

  const isTextTab = skillCategories.find((cat) => cat.id === activeTab)?.isText;
  const textContent = getTextContent();

  return (
    <div className="skills-tabs-container">
      <div className="tabs-buttons">
        {skillCategories.map((category) => (
          <button
            key={category.id}
            className={`tab-button ${activeTab === category.id ? "active" : ""}`}
            onClick={() => setActiveTab(category.id)}
          >
            {category.label}
          </button>
        ))}
      </div>

      <div className="skills-display">
        {activeTab === "interests" ? (
          <div className="interests-container">
            <BubbleGrid key={activeTab} data={randomizedInterests} />
          </div>
        ) : isTextTab ? (
          <div className="text-content">
            <p>{textContent}</p>
          </div>
        ) : filteredSkills.length > 0 ? (
          <div className="skills-grid">
            <BubbleGrid key={activeTab} data={filteredSkills} />
          </div>
        ) : (
          <div className="no-skills">How'd you get here..?</div>
        )}
      </div>
    </div>
  );
};

export default SkillsTabs;
