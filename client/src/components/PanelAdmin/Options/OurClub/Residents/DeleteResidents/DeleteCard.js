import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { deleteResidents, getAllResidents } from "../../../../../../store/residents"
import "./DeleteCard.css"
import Swal from "sweetalert2"

function DeleteCard({ resident }) {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const user = JSON.parse(localStorage.getItem("user"))

    useEffect(() => {
      if (!user) navigate("/")
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    const handleDelete = (id) => {
        dispatch(deleteResidents(id))
        .then(() =>
        Swal.fire({
          icon: "success",
          title: "Borrado",
          showConfirmButton: false,
          timer: 1500,
        })
      )
      .then(() => dispatch(getAllResidents()))
    }

  return (
    <div className="card-container">
      {/* <img src={resident.photo} alt={resident.id} /> */}
      <h3>{resident.name}</h3>
      <button onClick={() => handleDelete(resident.id)}>Borrar</button>
    </div>
  )
}

export default DeleteCard