import React, {useState} from 'react';
import {Button, Modal,Form} from "react-bootstrap"

const AddMovie = ({handleMovie}) => {
    const [show, setShow] = useState(false);
    const [name,setName]= useState("");
    const [rating,setRating]= useState(0);
    const [image,setImage]= useState("");
    const [year,setYaer]= useState("");
    const [description,setDescription]= useState("");
    const [trailer,setTrailer]= useState("");

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form>
  <Form.Group className="mb-3" >
    <Form.Label>Movie Name</Form.Label>
    <Form.Control type="text" placeholder="Enter name..." onChange={(e)=>setName(e.target.value)}/>
 
  </Form.Group>

  <Form.Group className="mb-3">
    <Form.Label>Year</Form.Label>
    <Form.Control type="text" placeholder="Year..." onChange={(e)=>setYaer(e.target.value)}/>
  </Form.Group>
  <Form.Group className="mb-3">
    <Form.Label>Rating</Form.Label>
    <Form.Control type="number" placeholder="Rating..." onChange={(e)=>setRating(e.target.value)}/>
  </Form.Group>
  <Form.Group className="mb-3">
    <Form.Label>description</Form.Label>
    <Form.Control type="text" placeholder="description..." onChange={(e)=>setDescription(e.target.value)}/>
  </Form.Group>
  <Form.Group className="mb-3">
    <Form.Label>Image</Form.Label>
    <Form.Control type="text" placeholder="Image..." onChange={(e)=>setImage(e.target.value)} />
  </Form.Group>
  <Form.Group className="mb-3" >
    <Form.Label>Movie Trailer</Form.Label>
    <Form.Control type="text" placeholder="Enter name..." onChange={(e)=>setTrailer(e.target.value)}/>
 
  </Form.Group>

</Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={()=>{handleMovie({name,image,rating,description,year,id:Math.random(),trailer});handleClose()}}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}

export default AddMovie