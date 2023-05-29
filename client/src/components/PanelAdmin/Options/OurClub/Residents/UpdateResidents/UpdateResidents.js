import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, Link } from "react-router-dom"
import { getAllResidents } from "../../../../../../store/residents"
import "./UpdateResidents.css"

function UpdateResidents() {
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
    
    const residents = useSelector((state) => state.resident)

  return (
    <div className="update-residents-container">
    <h1>Editar Residentes</h1>
    <div className="grid">
    {residents?.data?.map((resident) => (
        <div key={resident.id}>
          <Link to={`/admin/ourclub/residents/updateresidents/${resident.id}`}>
            {/* <img src={resident.photo} alt={resident.id} id={resident.id}/> */}
            <h3>{resident.name}</h3>

          </Link>
        </div>
      ))
    }
    </div>
  </div>
  )
}

export default UpdateResidents