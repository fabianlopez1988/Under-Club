import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { getAllInternationalResidents, getInternationalResident, updateInternationalResidents } from "../../../../../../store/agency"
import useInput from "../../../../../../utils/useInput"
import "./EditViewInternationalResidents.css"
import Form from "react-bootstrap/Form"
import Swal from "sweetalert2"

function EditViewInternationalResidents() {
    const { id } = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const name= useInput()
    const biography = useInput()
    const soundcloud = useInput()
    const instagram = useInput()
    const residentAdvisor = useInput()
    const pressKit = useInput()

    const [baseImage, setBaseImage] = useState("")

    const user = JSON.parse(localStorage.getItem("user"))

    useEffect(() => {
      if (!user) navigate("/")
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    useEffect(() => {
      dispatch(getInternationalResident(id))
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    const agencyRedux = useSelector((state) => state.agency)

    const uploadImage = (e) => {
      const blob= e.target.files[0]
      const reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onload = () => {
        setBaseImage(reader.result);
    }}

    const handleClick = (baseImage) => {
        dispatch(
            updateInternationalResidents({
                photo: baseImage === "" ? agencyRedux.photo : baseImage,
                name: name.value.length === 0 ? agencyRedux.name : name.value,
                biography: biography.value.length === 0 ? agencyRedux.biography : biography.value,
                soundcloud: soundcloud.value.length === 0 ? agencyRedux.soundcloud : soundcloud.value,
                instagram: instagram.value.length === 0 ? agencyRedux.instagram : instagram.value,
                residentAdvisor : residentAdvisor.value.length === 0 ? agencyRedux.residentAdvisor : residentAdvisor.value,
                pressKit: pressKit.value.length === 0 ? agencyRedux.pressKit : pressKit.value
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
      .then(() => dispatch(getAllInternationalResidents()))
      .then(() => navigate("/admin/ourclub/agency"))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

  return (
    <div className="edit-agency-container">
      <Form onSubmit={handleSubmit}>
        <h1>Residentes</h1>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Nombre</Form.Label>
          <br></br>
          <input placeholder={agencyRedux?.name} {...name} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
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
              src={agencyRedux?.photo}
              alt={agencyRedux?.id}
            />
          ) : null}
          <img height={"200px"} src={baseImage} alt="" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Biografía</Form.Label>
          <br></br>
          <textarea placeholder={agencyRedux?.biography} {...biography}></textarea>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Instagram</Form.Label>
          <br></br>
          <input placeholder={agencyRedux?.instagram} {...instagram} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>SoundCloud</Form.Label>
          <br></br>
          <input placeholder={agencyRedux?.soundcloud} {...soundcloud} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Origen</Form.Label>
          <br></br>
          <input placeholder={agencyRedux?.residentAdvisor} {...residentAdvisor} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Press Kit</Form.Label>
          <br></br>
          <input placeholder={agencyRedux?.pressKit} {...pressKit} />
        </Form.Group>
        <button type="submit" onClick={() => handleClick(baseImage)}>
          Guardar
        </button>
      </Form>
    </div>
  )
}

export default EditViewInternationalResidents