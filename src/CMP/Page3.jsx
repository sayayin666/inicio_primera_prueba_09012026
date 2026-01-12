import { useNavigate } from "react-router-dom";
function Page3() {
    const navigate = useNavigate()
    function pg3() {
        navigate('/')
    }
    return(
        <div>
            <img src="https://th.bing.com/th/id/R.6e019e09c0577894fbe937e2a271f7f0?rik=c2nNL2DDnMhFxQ&riu=http%3a%2f%2fspeedhunters-wp-production.s3.amazonaws.com%2fwp-content%2fuploads%2f2023%2f07%2f12213719%2fSpeedhunters-Alec-Pender-NOB15-31-1200x800.jpg&ehk=4tMNkaHnRMlXQ351EP9%2bN8BYElFkqLrHy%2f8T24cyrME%3d&risl=&pid=ImgRaw&r=0"></img>
            <h1>SILVIA_S15_ROJO</h1>
            <button onClick={pg3}>IR_A_PAGINA_INICIO</button>
        </div>
    )
}
export default Page3;