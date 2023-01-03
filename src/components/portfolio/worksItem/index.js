const WorkItems = ({item}) => {
    return(
        <a href={item.link} target="_blank" rel="noreferrer">
            <div id="work-card" key={item.id}>
                <img src={item.image} id="work-img" alt="works"/>
                <h3 id="work-title">{item.title}</h3>
                <a href={item.git} id="work-button" target="_blank" rel="noreferrer">
                    Repositório Github <i className="bx bx-right-arrow-alt" id="work-button-icon"></i>
                </a>
            </div>
        </a>
    )
}

export default WorkItems;