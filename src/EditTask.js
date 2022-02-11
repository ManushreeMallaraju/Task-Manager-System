import Modal from "./Modal"
import { useState } from 'react'
import './editTask.css'
import { doc, updateDoc } from 'firebase/firestore';
import { db } from './firebase'

function EditTask({ open, onClose, toEditTitle, toEditDescription, id }) {

  const [title, setTitle] = useState(toEditTitle)
  const [description, setDescription] = useState(toEditDescription)



  const handleSubmit = async (e) => {
    e.preventDefault()

    //reference of hte doc to edit
    const docRef = doc(db, 'tasks', id);
    try {
      await updateDoc(docRef, {
        title: title, //doc fields from state
        description: description
      })
      onClose()
    } catch (err) {
      alert(err)
    }
  }
  /* function to update document in firestore */

  return (
    <Modal modalLable='Edit Task' onClose={onClose} open={open}>
      <form onSubmit={handleSubmit} className='editTask' name='updateTask'>
        <input
          type='text'
          name='title'
          onChange={(e) => setTitle(e.target.value.toUpperCase())}
          value={title} />
        <textarea onChange={(e) => setDescription(e.target.value)} value={description}></textarea>
        <button type='submit'>Edit</button>
      </form>
    </Modal>
  )
}

export default EditTask
