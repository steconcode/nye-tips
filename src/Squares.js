import './App.css';
// import MutedVideo from './MutedVideo'

// import React, { useRef} from 'react'

// export default class BackSquares extends React.Component {
//     constructor() {
//         this.vidRef = useRef(null);
//         this.handlePlayVideo = () => {
//             vidRef.current.play();
//         }
//     }

//     componentDidMount() {
//         // call api or anything
//         console.log("Component has been rendered");
//       }

//     render() {
//         let vidRef = useRef(null);
//         let handlePlayVideo = () => {
//             vidRef.current.play();
//         }
//         return(
//             <div id="videoContainer">
//                 <video ref={this.vidRef} autoPlay loop id="backgroundVideo">
//                     <source src="https://i.imgur.com/FAXz4Ps.mp4" type="video/mp4"/>
//                 </video>
//             </div>
//             );
//     }
// }
class MutedVideo extends HTMLVideoElement {
    constructor() {
      super();
      this.muted = true;
      // I also noticed that you used autoplay, so I added it too.
      this.autoplay = true;
    }
  }
  
  customElements.define("x-muted", MutedVideo, { extends: "video" });

export default function BackSquares() {
    // return <div class="backSquare"><MultiSquares/></div>
    // const vidRef = useRef(null);
    // const handlePlayVideo = () => {
    // vidRef.current.play();
    // }

    let dataInner = '<video muted="true" autoplay="true" playsinline loop id="backgroundVideo"><source src="https://i.imgur.com/FAXz4Ps.mp4" type="video/mp4"/></video>'

    return(
        <div id="videoContainer"
            dangerouslySetInnerHTML={{__html: dataInner}}
        />
        );

    // return (
    //     <div id="videoContainer">
    //         <video
    //             loop
    //             is="x-muted"
    //             src="https://i.imgur.com/FAXz4Ps.mp4"
    //             id="backgroundVideo"
    //         >
    //         Sorry, your browser does not support the HTML video tag
    //         </video>
    //     </div>

    //   );
} 