import { Navigate } from "react-router-dom";
function Page1() {

    
    function saltarPagina() {
        
    }
    return(
        <div>
            <img src="https://uploads.builtforbackroads.com/uploads/2023/05/2023.05.21-NISSAN-Z33-350Z-NISMO-2008_1-1536x1024.jpg"></img>
            <h1>NISSAN_350Z</h1>
            <button onClick={saltarPagina}>IR PAGINA_2</button>
        </div>
    )
}
export default Page1;