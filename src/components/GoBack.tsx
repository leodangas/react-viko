import {Link} from "react-router";

export default function GoBack() {
    return (
        <Link to={"/"}  className={"style-button component-goBack"}>
            <img src={"/images/go-back-arrow.svg"} className={"icon"} />
            Grįžti atgal
        </Link>
    )
}