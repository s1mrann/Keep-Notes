import react from "react";

function Footer(){
    const time= new Date().getFullYear();
    return(
        <footer>
            <p>Copyright © {time}</p>
        </footer>
    )
}

export default Footer;