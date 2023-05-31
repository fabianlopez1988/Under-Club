import "./DeleteResidents.css"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { getAllResidents } from "../../../../../../store/residents"
import DeleteCard from "./DeleteCard"

function DeleteResidents() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const user = JSON.parse(localStorage.getItem("user"))

    useEffect(() => {
      if (!user) navigate("/")
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
      dispatch(getAllResidents())
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    const residentRedux = useSelector((state) => state.resident)

  return (
    <div className="delete-container">
      <h1>Borrar Residente</h1>
      <div className="grid">
        {residentRedux?.data.map((resident) => (
              <DeleteCard key={resident._id} resident={resident} />
            ))
        }
      </div>
    </div>
  )
}

export default DeleteResidents