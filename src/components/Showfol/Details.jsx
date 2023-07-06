const Details =(props)=>{
    const {status,premiered,network}=props;
    return(
        <>
        <p className=" pr-4 pl-4 "><span className="font-semibold text-lg">Status:</span>{status}</p>
        <p className="pl-4 pr-4">
           <span className="font-semibold text-lg"> Premiered :</span>{premiered} {!!network && `on ${network.name}`}
        </p>
        </>
    )
}
export default Details;