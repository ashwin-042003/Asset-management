import React, { useState, useEffect } from 'react';
import {  useNavigate } from 'react-router-dom'; // Import useNavigate
import axios from 'axios';
import './Add.css';
function Add() {
  const navigate = useNavigate(); // Initialize useNavigate

  // State for project details
  const [project, setProject] = useState({
    owner: '',
    address: '',
    sqft: '',
    amount: '',
  });

  // State for existing projects
  const [existingProjects, setExistingProjects] = useState([]);

  // Fetch existing projects on component mount
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('http://localhost:3002/projects');
        setExistingProjects(response.data);
      } catch (error) {
        console.error('Error fetching existing projects:', error);
      }
    };
    fetchProjects();
  }, []);

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Check if team leader's name already exists
    const existingLeader = existingProjects.find(proj => proj.owner === project.owner);
    if (existingLeader) {
      alert('Asset Already there You should update!');
      return;
    }
    try {
      // Make POST request to backend server to add project
      const response = await axios.post('http://localhost:3002/projects', project);
      console.log('Asset added:', response.data);
      // Clear form fields after successful submission
      setProject({
        owner: '',
    address: '',
    sqft: '',
    amount: '',
      });
      // Update existing projects state
      setExistingProjects([...existingProjects, response.data]);
    } catch (error) {
      console.error('Error adding Asset:', error);
    }
  };

  // Function to handle form input changes
  const handleChange = (e) => {
    setProject({ ...project, [e.target.name]: e.target.value });
  };

  // Function to handle update button click
  const handleUpdate = (projectId) => {
    navigate(`/update/${projectId}`);
  };

  return (
    <div className='add'>
      <div className='AddCon'>
      <h2>Add Asset</h2>
      <form onSubmit={handleSubmit} className='form'>
  <input className='input' type="text" name="owner" placeholder="Owner Name" value={project.owner} onChange={handleChange} /><br />
  <input className='input' type="text" name="address" placeholder="Address" value={project.address} onChange={handleChange} /><br />
  <input className='input' type="text" name="sqft" placeholder="Sqft" value={project.sqft} onChange={handleChange} /><br />
  <input className='input' type="number" name="amount" placeholder="Amount" value={project.amount} onChange={handleChange} /><br />
  <button className='button' type="submit">Add Asset</button>
</form>

      <div className='tableCon'>
      <h2>Existing Assets</h2>
      <table className='table'>
        <thead className='thead'>
          <tr className='tr'>
            <th>Owner Name</th>
            <th>Address</th>
            <th>Sqft</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {existingProjects.map((proj, index) => (
            <tr key={index}>
              <td>{proj.owner}</td>
              <td>{proj.address}</td>
              <td>{proj.sqft}</td>
              <td>{proj.amount}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
    </div>
  );
}

export default Add;
