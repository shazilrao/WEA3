import details from "../assets/FlyWithShazil.pdf"
function PicCards(props) {
    return(
        <>
        <div className="mydiv1" style={{height: '650px'}}>
            <img src={props.img} alt="something went wrong" />
            <p className="des">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quasi veritatis omnis quas quisquam tempora hic quibusdam numquam non ipsam atque</p>
            <button type="button" className="btn btn-outline-success s-marg" ><a href={details} download="Details" className="text-success" style={{textDecoration:"none"}} >Confirm</a></button>
          </div>
        </>
    );
}

export default PicCards