import './SinglePage.scss';
import Slider from '../../components/Slider/Slider.jsx';
import { singlePostData, userData } from "../../libraries/dummyData.js";
import Map from "../../components/Map/Map.jsx";
import { useLoaderData } from 'react-router-dom';

function SinglePage() {
    const data = useLoaderData();
    return (
        <div className='singlepage'>
            <div className="details">
                <div className="wrapper">
                    <Slider images={data.images} />
                    <div className="info">
                        <div className="top">
                            <div className="post">
                                <h1>{data.title}</h1>
                                <div className="address">
                                    <img src="/pin.png" />
                                    <span>{data.address}</span>
                                </div>
                                <div className="price">
                                    $ {data.price}
                                </div>
                            </div>
                            <div className="user">
                                <img src={data.user.avatar} alt="" />
                                <span>{data.user.username}</span>
                            </div>
                        </div>
                        <div className="bottom">
                            <p>{data.postDetail.desc}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="features">
                <div className="wrapper">
                    <p className='title'>General</p>
                    <div className="listvertical">
                        <div className="feature">
                            <div className="featureimgcontainer">
                                <img src="/utility.png" alt="" />
                            </div>
                            <div className="featuretext">
                                <span>Utilities</span>
                                <p>{data.postDetail.utilities}</p>
                            </div>
                        </div>
                        <div className="feature">
                            <div className="featureimgcontainer">
                                <img src="/pet.png" alt="" />
                            </div>
                            <div className="featuretext">
                                <span>Pet Policy</span>
                                <p>{data.postDetail.pet}</p>
                            </div>
                        </div>
                        <div className="feature">
                            <div className="featureimgcontainer">
                                <img src="/fee.png" alt="" />
                            </div>
                            <div className="featuretext">
                                <span>Property Fees</span>
                                <p>Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                        </div>
                    </div>
                    <p className='title'>Sizes</p>
                    <div className="sizes">
                        <div className="size">
                            <img src="/size.png" alt="" />
                            <span>{data.postDetail.size}</span>
                        </div>
                        <div className="size">
                            <img src="/bed.png" alt="" />
                            <span>{data.bedroom}</span>
                        </div>
                        <div className="size">
                            <img src="/bath.png" alt="" />
                            <span>{data.bathroom}</span>
                        </div>
                    </div>
                    <p className='title'>Nearby Places</p>
                    <div className="listhorizontal">
                        <div className="feature">
                            <div className="featureimgcontainer">
                                <img src="/school.png" alt="" />
                            </div>
                            <div className="featuretext">
                                <span>School</span>
                                <p>{data.postDetail.school}</p>
                            </div>
                        </div>
                        <div className="feature">
                            <div className="featureimgcontainer">
                                <img src="/pet.png" alt="" />
                            </div>
                            <div className="featuretext">
                                <span>Bus Stop</span>
                                <p>{data.postDetail.bus}</p>
                            </div>
                        </div>
                        <div className="feature">
                            <div className="featureimgcontainer">
                                <img src="/fee.png" alt="" />
                            </div>
                            <div className="featuretext">
                                <span>Restaurant</span>
                                <p>{data.postDetail.restaurant}</p>
                            </div>
                        </div>
                    </div>
                    <p className='title'>Location</p>
                    <div className="mapcontainer">
                        <Map items={[data]} />
                    </div>
                    <div className="buttons">
                        <button>
                            <img src="/chat.png" alt="" />
                            Send a Message
                        </button>
                        <button>
                            <img src="/save.png" alt="" />
                            Save this location
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SinglePage