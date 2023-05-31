import "./DeleteInternationalResidents.css"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { getAllInternationalResidents } from "../../../../../../store/agency"
import DeleteIntResCard from "./DeleteIntResCard"

function DeleteInternationalResidents() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const user = JSON.parse(localStorage.getItem("user"))

    useEffect(() => {
      if (!user) navigate("/")
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
      dispatch(getAllInternationalResidents())
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    const agencyRedux = useSelector((state) => state.agency)

  return (
    <div className="delete-agency-container">
      <h1>Borrar Residente Internacional</h1>
      <div className="grid">
        {agencyRedux?.data.map((resident) => (
              <DeleteIntResCard key={resident._id} resident={resident} />
            ))
        }
      </div>
    </div>
  )
}

export default DeleteInternationalResidents