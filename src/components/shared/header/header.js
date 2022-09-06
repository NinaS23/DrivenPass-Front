import { useLocation } from "react-router-dom";
export default function Header() {
    const location = useLocation();

    function canRenderHeader() {
        return !["/", "/sign-up"].includes(location.pathname);
    }
    
    return canRenderHeader() ? (
        <>
            <h1>header</h1>
        </>
    ) : null;
}

