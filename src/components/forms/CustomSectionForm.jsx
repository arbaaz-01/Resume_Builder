"use client"

import { useState } from "react"

const CustomSectionForm = ({ data, updateData }) => {
  const [newItem, setNewItem] = useState("")

  const addItem = () => {
    if (newItem.trim()) {
      updateData([...data, newItem.trim()])
      setNewItem("")
    }
  }

  const removeItem = (index) => {
    updateData(data.filter((_, i) => i !== index))
  }

  return (
    <div className="form-section">
      <h3>Custom Section</h3>
      <div className="input-group">
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="e.g., Hackathon Participation, Volunteer Work"
          onKeyPress={(e) => e.key === "Enter" && addItem()}
        />
        <button type="button" onClick={addItem} className="add-btn">
          Add
        </button>
      </div>

      <div className="items-list">
        {data.map((item, index) => (
          <div key={index} className="list-item">
            <span>{item}</span>
            <button type="button" onClick={() => removeItem(index)} className="remove-item">
              ×
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CustomSectionForm