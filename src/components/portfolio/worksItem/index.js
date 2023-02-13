const WorkItems = ({item}) => {
    return(
            <div id="work-card" key={item.id}>
                <div className="img-container">
                    <img src={item.image} id="work-img" alt="works"/>
                    <div className="icons-container">
                        <a href={item.git} id="icon-portfolio" target="_blank" rel="noreferrer">
                            <i className="uil uil-github-alt"></i>
                        </a>
                        <a href={item.link} id="icon-portfolio" target="_blank" rel="noreferrer">
                            <i className="uil uil-eye"></i>
                        </a>
                    </div>
                </div>
                <h3 id="work-title">{item.title}</h3>
            </div>
    )
}

export default WorkItems;