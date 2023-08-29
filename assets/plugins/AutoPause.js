class AutoPause {
    constructor () {
        this.threshold = 0.25;
        this.hendleIntersection = this.hendleIntersection.bind(this);
        this.hendleVisibilityChange = this.hendleVisibilityChange.bind(this);
    }
    run(player) {
        this.player =player;
        const observer = new IntersectionObserver(this.handleIntersection,{threshold: this.threshold} )
        observer.observe(this.player.media)
        document.addEventListener("visibilitychange", this.hendleVisibilityChange)
    }
    hendleIntersection(entires){
        const entry = entries[0];

        const isVisible = entry.intersectionRatio >= this.threshold

        if (isVisible) {
            this.player.play()
        }
        else {
           this.player.pause() 
        }
     }    
        hendleVisibilityChange(){
            const isVisible = document.visibilityState == "visible"
            if (isVisible) {
                this.player.play();
            }
            else {
               this.player.pause(); 
            }
        }
   
}

export default AutoPause;