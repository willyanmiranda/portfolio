import { useEffect, useState } from "react";
import { projectsData } from "../data";
import { projectNav } from "../data";
import WorkItems from "../worksItem";

const Projects = () => {

    const [item, setItem] = useState({name: 'tudo'});
    const [projects, setProjects] = useState([]);
    const [active, setActive] = useState("tudo");

    useEffect(() => {
        if(item.name === "tudo") {
            setProjects(projectsData);
        } else {
            const newProjects = projectsData.filter((project) => {
                return project.category === item.name
            });
            setProjects(newProjects); 
        }
    }, [item]);

    const handleClick = (e, index) => {
        setItem({ name: e.target.textContent });
        setActive(e.target.textContent)
    }

    return(
        <div>
            <div id="work-filters">
                {projectNav.map((item, index) => {
                    return(
                        <span onClick={(e) => {handleClick(e, index)}} id={active === item.name ? "work-item-active" : "work-item"} key={index}>{item.name}</span>
                    )
                })}
            </div>

            <div id="work-container">
                {projects.map((item) => {
                    return <WorkItems item={item} key={item.id}/>
                })}
            </div>
        </div>
    )
}

export default Projects;