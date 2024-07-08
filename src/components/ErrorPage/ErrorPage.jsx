import { useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error=useRouteError();
    console.log(error);
    return (
        <div>

            <h1>This is Error Page</h1>
            <h3>{error.message}</h3>
            
        </div>
    );
};

export default ErrorPage;
