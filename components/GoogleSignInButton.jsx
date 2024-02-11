import { Button } from "./ui/button";

export default function GoogleSignInButton({ children }) {
    function loginWGoogle () {
        
    }

    return <Button onClick={loginWGoogle}>{children}</Button>;
}