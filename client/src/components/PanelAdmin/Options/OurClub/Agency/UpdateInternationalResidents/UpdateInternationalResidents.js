import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, Link } from "react-router-dom"
import { getAllInternationalResidents } from "../../../../../../store/agency"
import "./UpdateInternationalResidents.css"

function UpdateInternationalResidents() {
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
    <div className="update-agency-container">
    <h1>Editar Residente Internacional</h1>
    <div className="grid">
    {agencyRedux?.data?.map((resident) => (
        <div key={resident.id}>
          <Link to={`/admin/ourclub/agency/updateagency/${resident.id}`}>
            <img src={resident.photo} alt={resident.id} id={resident.id}/>
          </Link>
        </div>
      ))
    }
    </div>
  </div>
  )
}

export default UpdateInternationalResidents