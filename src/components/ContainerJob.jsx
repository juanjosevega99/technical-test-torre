import React from 'react';
import '../assets/styles/components/ContainerJob.scss';

import logo from '../assets/static/company.png';

const ContainerJob = () => (
  <div className="container-job">
    <div className="container-job-details">
      <img className="container-job-details-img" src={logo} alt="" />
      <h2 className="container-job-details-title">Full Stack Engineer</h2>
      <p>A full time team member or employee</p>
      <p>1 months ago</p>
      <div className="container-job-details-learn">
        <h5>Learn the strengths needed</h5>
        <button type="button">open</button>
      </div>
    </div>
  </div>
);

export default ContainerJob;
