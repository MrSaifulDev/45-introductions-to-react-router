import { useNavigate, useRouteError } from "react-router-dom";


const ErrorPage = () => {

    /* for hand route error as like 404 */
    const error = useRouteError() ;
    console.log(error);


/* for hand back button  */
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    }

/* for handle back button end */

    return (
        <div>
            <h1>Oppps !!!!</h1>

            <p>
                
                {
                    /* for showing error message on display  */
                    error.statusText || error.message 
                }
            </p>
            {
                error.status === 404 && <div>
                    <h3>page not found </h3>
                    <button onClick={handleBack}>back</button> {/* for handle back button  */}
                </div>
            }
            
        </div>
    );
};

export default ErrorPage;