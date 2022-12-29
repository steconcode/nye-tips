import './App.css';


export default function TipCard(props) {
    return (
        <a href={"https://account.venmo.com/u/" + props.link}>
            <div class="tip-card">
                <img class="tip-img" src={props.image} alt={"a photo of " + props.name}/>
                <div class="tip-text">
                    <h3>{props.name}</h3>
                </div>
            </div>
            {/* <Card class="tip-card" bg='dark'>
                <Card.Img variant="top" src={props.image} />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                    {props.text}
                    </Card.Text>
                </Card.Body>
            </Card> */}
        </a>
        
    );
}