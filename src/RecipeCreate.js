import React, { useState } from "react";

function RecipeCreate({ createRecipe }) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  // Initial state of a new recipe
  const initialFormState = {name: '', cuisine: '', photo: '', ingredients: '', preparation: ''}  
  // State to update new recipe
  const [formData, setFormData] = useState(initialFormState);
  // handler for change
  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }
  // handler for submit
  const handleSubmit = (e) => {
    e.preventDefault();
    createRecipe(formData);
    setFormData(initialFormState)
  }
  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <label htmlFor='name'>
                <input name='name' id='name' type='text' require={true} onChange={handleChange} value={formData.name}  placeholder="Name"/>
              </label>
            </td>
            <td>
              <label htmlFor='cuisine'>
                <input name='cuisine' id='cuisine' type='text' require={true} onChange={handleChange} value={formData.cuisine} placeholder="Cuisine"/>
              </label>
            </td>
            <td>
              <label htmlFor='photo'>
                <input name='photo' id='photo' type='url' require={true} onChange={handleChange} value={formData.photo} placeholder="URL"/>
              </label>
            </td>
            <td>
              <label htmlFor='ingredients'>
                <textarea name='ingredients' id='ingredients' type='text' require={true} onChange={handleChange} value={formData.ingredients} placeholder="Ingredients"/> 
              </label>
            </td>
            <td>
              <label htmlFor='preparation'>
                <textarea name='preparation' id='preparation' type='text' require={true} onChange={handleChange} value={formData.preparation} placeholder="Preparation"/>
              </label>
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
