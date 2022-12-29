class MutedVideo extends HTMLVideoElement {
    constructor() {
      super();
      this.muted = true;
      // I also noticed that you used autoplay, so I added it too.
      this.autoplay = true;
    }
  }
  
  customElements.define("x-muted", MutedVideo, { extends: "video" });