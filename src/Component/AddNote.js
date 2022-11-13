import React, { useState } from 'react'

const AddNote = ({handleAddNote}) => {
    const[noteText, setNotetext] = useState("")
    const characterLimit = 200
    const handleChange = (e)=>{
      if(characterLimit - e.target.value.length>=0){
        setNotetext(e.target.value)
      }
        

    }

    const handleSaveClick = ()=>{
      if(noteText.trim().length>0){
        handleAddNote(noteText)
        setNotetext("")

      }
     

    }
  return (
    <div className='note new'>
        <textarea
				rows='8'
				cols='10'
				placeholder='Type to add a note...'
                onChange={handleChange}
                value = {noteText}
			></textarea>
            <div className='note-footer'>
				<small>
				{characterLimit - noteText.length} characterLimit
				</small>
                <button className='save' onClick={handleSaveClick}>
					Save
				</button>
				
			</div>
      
    </div>
  )
}

export default AddNote
