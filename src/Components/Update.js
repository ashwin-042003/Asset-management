import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Update() {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState({
    owner: '',
    address: '',
    sqft: '',
    amount: 0
  });

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await axios.get(`http://localhost:3002/projects/${projectId}`);
        setProject(response.data);
      } catch (error) {
        console.error('Error fetching Asset:', error);
      }
    };
    fetchProject();
  }, [projectId]);

  const handleChange = (e) => {
    setProject({ ...project, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:3002/projects/${projectId}`, project);
      navigate('/Add');
    } catch (error) {
      console.error('Error updating Asset:', error);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3002/projects/${projectId}`);
      navigate('/Add');
    } catch (error) {
      console.error('Error deleting Asset:', error);
    }
  };

  return (
    <div>
      <h2>Update Project</h2>
      <form onSubmit={handleUpdate}>
      <input className='input' type="text" name="owner" placeholder="Owner Name" value={project.owner} onChange={handleChange} /><br />
  <input className='input' type="text" name="address" placeholder="Address" value={project.address} onChange={handleChange} /><br />
  <input className='input' type="text" name="sqft" placeholder="Sqft" value={project.sqft} onChange={handleChange} /><br />
  <input className='input' type="number" name="amount" placeholder="Amount" value={project.amount} onChange={handleChange} /><br />
 
 <button type="submit">Update Asset</button>
      </form>
      <button onClick={handleDelete}>Delete Asset</button>
    </div>
  );
}

export default Update;
