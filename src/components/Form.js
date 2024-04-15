import React, { useState } from 'react';

const Form = ({ generatePdf }) => {
  const [name, setName] = useState('');
  const [course, setCourse] = useState('B.tech');

  const handleSubmit = (e) => {
    e.preventDefault();
    generatePdf(name, course);
  };

  return (
    <div style={{ width: '300px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
      <h2>Generate PDF</h2>
      <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            required
            style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px', fontSize: '16px' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="course">Course:</label>
          <select
            id="course"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px', fontSize: '16px' }}
          >
            <option value="B.tech">B.tech</option>
            <option value="M.tech">M.tech</option>
          </select>
        </div>
        <button type="submit" style={{ width: '100%', padding: '10px', border: 'none', borderRadius: '4px', backgroundColor: '#007bff', color: '#fff', fontSize: '16px', cursor: 'pointer' }}>Generate PDF</button>
      </form>
    </div>
  );
};

export default Form;
