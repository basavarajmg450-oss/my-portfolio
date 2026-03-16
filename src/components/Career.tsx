import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My journey <span>&</span>
          <br /> education
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4> Pre-University</h4>
                <h5>Hiremallur Ishwaran Scince and Commerce College,Dharwad</h5>
              </div>
              <h3>2021</h3>
            </div>
            <p>
              Completed secondary and higher secondary education with a strong
              focus on Science and Mathematics, building a foundation for
              engineering.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Bachelor of Engineering</h4>
                <h5>Canara Engineering College Bantwal,Mangalore</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Started pursuing a Bachelor of Engineering in Computer Science and
              Engineering. Focusing on data structures, algorithms, and core
              computing principles.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Development</h4>
                <h5>Self-Learning & Projects</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Mastering the MERN stack and building real-world applications like
              college management systems, travel guides, and AI-integrated web
              platforms.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
