import Card from 'react-bootstrap/Card';
import { FaArrowLeftLong } from "react-icons/fa6";
import "./articleItem.css"
import { Link } from 'react-router-dom';
function ArticleItem(props){
    return(
      <>
        <Card style={{ width: '18rem' }}>
          <Card.Img 
          variant='top'
          src={props.img} />
          <Card.Body>
             <Card.Title className='py-2'>{props.title}</Card.Title>
             <Card.Text>
                {props.desc}
             </Card.Text>
             <Link to={`/article/${props.id}`} className='read-more'>
                <span>ادامه مقاله</span>
                <FaArrowLeftLong className='ms-1' size='15px'/>
             </Link>
          </Card.Body>
        </Card>
      </>      
    )   
}
export default ArticleItem;