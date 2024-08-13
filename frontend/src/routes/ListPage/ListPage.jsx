import { Await, useLoaderData } from 'react-router-dom';
import Card from '../../components/Card/Card';
import Filter from '../../components/Filter/Filter';
import Map from '../../components/Map/Map';
import './ListPage.scss';
import { Suspense } from 'react';

export default function ListPage() {
    const data = useLoaderData();
    console.log(data.postResponse.data);
    return (
        <div className='listpage'>
            <div className="listcontainer">
                <div className="listwrapper">
                    <Filter />
                    <Suspense fallback={<p>Loading...</p>}>
                        <Await resolve={data.postResponse} errorElement={<p>Error loading posts.</p>}>
                            {(postResponse) => postResponse.data.map(post => (
                                <Card key={post.id} item={post} />
                            ))}
                        </Await>
                    </Suspense>
                </div>
            </div>
            <div className="mapcontainer">
                <Suspense fallback={<p>Loading...</p>}>
                    <Await resolve={data.postResponse} errorElement={<p>Error loading posts.</p>}>
                        {(postResponse) =>
                            <Map items={postResponse.data} />
                        }
                    </Await>
                </Suspense>
            </div>
        </div>
    )
}
