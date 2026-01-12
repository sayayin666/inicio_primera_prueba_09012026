import { useNavigate } from "react-router-dom";
function Page2() {
    const navigate = useNavigate()
    function irapagina3() {
        navigate('/page3')
    }
    return(
        <div>
            <img src="https://cdn.wallpapersafari.com/58/71/HN2jxP.jpg"></img>
            <h1>MITSUBISHI_LANCER_EVO_9</h1>
            <button onClick={irapagina3}>IR_A_PAGINA_3</button>
        </div>
    )
}
export default Page2;