import './PlayerList.css'




const Playercard = (props) => {
    return ( 
        <div className='d2'>
            <img  src={props.image} alt={props.fullname + ' image'} />
            <div className="d3">
                <h2>{props.fullname}</h2>
                <p><strong>Born :</strong>{props.born}</p>
                <p><strong>Team: </strong> {props.team}</p>
                
            </div>
        </div>
    );
};



Playercard.defaultProps ={
    image:"photo",
    fullname:"name",
    born:"date",
    team:"equipe",
}
export default Playercard;