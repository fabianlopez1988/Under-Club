import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { getAllResidents, getResident, updateResidents } from "../../../../../../store/residents"
import useInput from "../../../../../../utils/useInput"
import "./EditViewResidents.css"
import Form from "react-bootstrap/Form"
import Swal from "sweetalert2"

function EditViewResidents() {
    const { id } = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const name= useInput()
    const biography = useInput()
    const soundcloud = useInput()
    const instagram = useInput()
    const residentAdvisor = useInput()
    const pressKit = useInput()
    const trackSoundcloud = useInput()

    

    const [baseImage, setBaseImage] = useState("")

    const user = JSON.parse(localStorage.getItem("user"))

    useEffect(() => {
      if (!user) navigate("/")
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    useEffect(() => {
      dispatch(getResident(id))
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    const residentRedux = useSelector((state) => state.resident)

    const uploadImage = (e) => {
      const blob= e.target.files[0]
      const reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onload = () => {
        setBaseImage(reader.result);
    }}

    const handleClick = (blob) => {
        dispatch(
            updateResidents({
                // photo: blob === "" ? residentRedux.photo : blob,
                name: name.value.length === 0 ? residentRedux.name : name.value,
                // biography: biography.value.length === 0 ? residentRedux.biography : biography.value,
                // soundcloud: soundcloud.value.length === 0 ? residentRedux.soundcloud : soundcloud.value,
                // instagram: instagram.value.length === 0 ? residentRedux.instagram : instagram.value,
                // residentAdvisor : residentAdvisor.value.length === 0 ? residentRedux.residentAdvisor : residentAdvisor.value,
                pressKit: pressKit.value.length === 0 ? residentRedux.pressKit : pressKit.value,
                // trackSoundcloud: trackSoundcloud.value.length === 0 ? residentRedux.trackSoundcloud : trackSoundcloud.value
            })
        )
        .then(() =>
        Swal.fire({
          icon: "success",
          title: "Actualizado",
          showConfirmButton: false,
          timer: 1500,
        })
      )
      .then(() => dispatch(getAllResidents()))
      .then(() => navigate("/admin/ourclub/residents"))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

  return (
    <div className="edit-container">
      <Form onSubmit={handleSubmit}>
        <h1>Residentes</h1>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Nombre</Form.Label>
          <br></br>
          <input placeholder={residentRedux?.name} {...name} />
        </Form.Group>

        {/* <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Foto</Form.Label>
          <br></br>
          <input
            type="file"
            onChange={(e) => {
              uploadImage(e);
            }}
          ></input>
          {!baseImage ? (
            <img
              height={"200px"}
              src={residentRedux?.photo}
              alt={residentRedux?.id}
            />
          ) : null}
          <img height={"200px"} src={baseImage} alt="" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Biografía</Form.Label>
          <br></br>
          <textarea placeholder={residentRedux?.biography} {...biography}></textarea>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Instagram</Form.Label>
          <br></br>
          <input placeholder={residentRedux?.instagram} {...instagram} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>SoundCloud</Form.Label>
          <br></br>
          <input placeholder={residentRedux?.soundcloud} {...soundcloud} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Resident Advisor</Form.Label>
          <br></br>
          <input placeholder={residentRedux?.residentAdvisor} {...residentAdvisor} />
        </Form.Group> */}

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Press Kit</Form.Label>
          <br></br>
          <input placeholder={residentRedux?.pressKit} {...pressKit} />
        </Form.Group>

        {/* <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Track SoundCloud</Form.Label>
          <br></br>
          <input placeholder={residentRedux?.trackSoundcloud} {...trackSoundcloud} />
        </Form.Group> */}
        <button type="submit" onClick={() => handleClick(baseImage)}>
          Guardar
        </button>
      </Form>
    </div>
  )
}

export default EditViewResidents