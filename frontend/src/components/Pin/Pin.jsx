import "./Pin.scss";
import { Marker, Popup } from 'react-leaflet';
import { Link } from 'react-router-dom';


export default function Pin({ items }) {
    return (
        <Marker position={[items.lattitude, items.longitude]}>
            <Popup>
                <div className="popupcontainer">
                    <img src={items.img} alt="" />
                    <div className="textcontainer">
                        <Link to={`/${items.id}`} >{items.title}</Link>
                        <span className='bed'>{items.bedroom} bedrooms</span>
                        <b>{items.price}</b>
                    </div>
                </div>
            </Popup>
        </Marker>
    )
}
