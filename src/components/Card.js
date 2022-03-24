function Card({imageUrl, location, googleMapsUrl, title, startDate, endDate, description}) {
    const date = startDate.slice(8, 12);
    let valueNum = date
    
    return (
        <div className="card">
            {valueNum && <div className="card--badge">{valueNum}</div>}
            <div> <img src={imageUrl} className="card--img" /></div>
             <div>
                <div className="card--location">
                    <img src="../images/locator.png" className="card--locator" />
                    <h2 className="card--country">{location}</h2>
                    <h3 className="card--map"><a href={googleMapsUrl}>View on Google Maps</a></h3>
                </div>
                <h1 className="card--title">{title}</h1>
                <h2 className="card--date"><span>{startDate}</span> - <span>{endDate}</span></h2>
                <p className="card--texts">{description}</p>
             </div>
        </div>
    )
}

export default Card