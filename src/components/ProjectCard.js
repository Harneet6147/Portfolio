import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, demo, code }) => {
    return (
        <Col size={12} sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgUrl} />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "5px", marginTop: "25px" }}>
                        <button style={{ border: "0.2px solid white", padding: "3px 3px 3px 3px" }}> <a style={{ textDecoration: "None", color: "white" }} href={demo} target="_blank" > Demo </a>  </button>
                        <button style={{ border: "0.2px solid white", padding: "3px 3px 3px 3px" }}> <a style={{ textDecoration: "None", color: "white" }} href={code} target="_blank" > Code </a>  </button>
                    </div>

                </div>
            </div>
        </Col>
    )
}


