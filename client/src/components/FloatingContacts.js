import React, { useState, useEffect } from "react";
import "./FloatingContacts.css";

function FloatingContacts() {
  const [showLiked, setShowLiked] = useState(false);
  const [likedProjects, setLikedProjects] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("likedProjects");
    if (saved) {
      setLikedProjects(JSON.parse(saved));
    }
  }, []);

  const handleShowLiked = () => {
    setShowLiked(!showLiked);
  };

  return (
    <>
      <div className="floating-contacts" aria-hidden>
        <a href="mailto:hello@arcdesign.com" className="float-icon email" title="Email">✉️</a>
        <a href="tel:+1234567890" className="float-icon phone" title="Call">📞</a>
        <a href="/contact" className="float-icon chat" title="Contact Page">💬</a>
        <button 
          className="float-icon like" 
          title="Liked Projects"
          onClick={handleShowLiked}
        >
        </button>
      </div>

      {showLiked && (
        <div className="liked-projects-panel">
          <div className="liked-projects-header">
            <h3>Liked Projects ({likedProjects.length})</h3>
            <button className="close-btn" onClick={() => setShowLiked(false)}>✕</button>
          </div>
          <div className="liked-projects-list">
            {likedProjects.length === 0 ? (
              <p className="no-likes">No liked projects yet</p>
            ) : (
              likedProjects.map((project, idx) => (
                <div key={idx} className="liked-project-item">
                  <img src={project.url} alt={project.title} />
                  <p>{project.title}</p>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default FloatingContacts;
