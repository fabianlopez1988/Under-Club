import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { deleteInternationalResidents, getAllInternationalResidents } from "../../../../../../store/agency"
import "./DeleteIntResCard.css"
import Swal from "sweetalert2"

function DeleteIntResCard({ resident }) {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const user = JSON.parse(localStorage.getItem("user"))

    useEffect(() => {
      if (!user) navigate("/")
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    const handleDelete = (id) => {
        dispatch(deleteInternationalResidents(id))
        .then(() =>
        Swal.fire({
          icon: "success",
          title: "Borrado",
          showConfirmButton: false,
          timer: 1500,
        })
      )
      .then(() => dispatch(getAllInternationalResidents()))
    }

  return (
    <div className="agency-card-container">
      <img src={resident.photo} alt={resident.id} />
      <button onClick={() => handleDelete(resident.id)}>Borrar</button>
    </div>
  )
}

export default DeleteIntResCard