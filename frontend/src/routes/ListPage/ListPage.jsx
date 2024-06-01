import Card from '../../components/Card/Card';
import Filter from '../../components/Filter/Filter';
import Map from '../../components/Map/Map';
import { listData } from '../../libraries/dummyData';
import './ListPage.scss';

export default function ListPage() {
    const data = listData;
    return (
        <div className='listpage'>
            <div className="listcontainer">
                <div className="listwrapper">
                    <Filter />
                    {data.map((item) => (
                        <Card key={item.id} item={item} />
                    ))}
                </div>
            </div>
            <div className="mapcontainer">
                <Map items={data} />
            </div>
        </div>
    )
}
