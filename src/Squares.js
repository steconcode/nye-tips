import './App.css';

export default function BackSquares() {
    let dataInner = '<video muted="true" autoplay="true" playsinline loop id="backgroundVideo"><source src="https://i.imgur.com/FAXz4Ps.mp4" type="video/mp4"/></video>'

    return(
        <div id="videoContainer"
            dangerouslySetInnerHTML={{__html: dataInner}}
        />
        );
} 