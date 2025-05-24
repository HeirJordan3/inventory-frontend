import React, { useState } from 'react';
import axios from 'axios';

const InventoryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    quantity: '',
    location: '',
    lockerCombo: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/v1/inventory', {
        name: formData.name,
        quantity: parseInt(formData.quantity),
        location: formData.location,
        lockerCombo: formData.lockerCombo
      });
  
      console.log('Item created:', response.data);
  
      
      setFormData({
        name: '',
        quantity: '',
        location: '',
        lockerCombo: ''
      });
  
    } catch (error) {
      console.error('Error creating item:', error.response?.data || error.message);
    }
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        placeholder="Item Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        name="quantity"
        type="number"
        placeholder="Quantity"
        value={formData.quantity}
        onChange={handleChange}
        required
      />
      <input
        name="location"
        placeholder="Location"
        value={formData.location}
        onChange={handleChange}
        required
      />
      <input
        name="lockerCombo"
        placeholder="Locker Combo"
        value={formData.lockerCombo}
        onChange={handleChange}
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default InventoryForm;
