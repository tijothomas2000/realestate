import './List.scss';
import Card from "../Card/Card.jsx";

export default function List({ posts }) {
    return (
        <div className='list'>
            {posts.map(item => <Card key={item.id} item={item} />)}
        </div>
    )
}
