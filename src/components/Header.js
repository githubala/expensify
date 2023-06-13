///////////////////// stateless functional Component
const Header=(props)=>{
    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.subtitle}</p>
        </div>      
                    
        )
}
Header.defaultProps = {
    title : "default props title Indecision"
}

export default Header;