const Details =(props)=>{
    const {status,premiered,network}=props;
    return(
        <>
        <p>Status:{status}</p>
        <p>
            Premiered {premiered} {!!network && `on ${network.name}`}
        </p>
        </>
    )
}
export default Details;