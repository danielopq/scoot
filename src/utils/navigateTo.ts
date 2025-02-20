import { useNavigate } from "react-router-dom";

/**
 * Function that allows navigation through the website.
 * 
 * @param {string} path - The destination path to navigate to.
 */
const navigateTo = (path:string):(()=>void) =>{
    const navigate = useNavigate();
    return ()=>navigate(path);
}
export default navigateTo;