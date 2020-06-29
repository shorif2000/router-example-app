import {Lightning, Router} from "wpe-lightning-sdk";

export default class Player extends Lightning.Component{
    static _template(){
        return {
            rect: true, w: 1920, h: 1080,
            color: 0xfff6d55c,
            Label: {
                x: 960, y: 540, mount: 0.5,
                text: { textAlign:'center', lineHeight:52,
                    text: 'Player page', textColor: 0xff0f202b
                }
            },
            Explanation: {
                x: 960, y: 690, mount: 0.5, alpha: 0.5,
                text: {
                    fontSize: 27, textColor: 0xaa000000, textAlign:'center', lineHeight:35,
                    text: 'press enter to show notification\npress down to navigate to a non existing page\npress up to navigate to Search with data-provider'
                }
            }
        }
    }

    /**
     * Tell the router to do a navigate
     */
    _handleUp(){
        Router.navigate("home/search/vikings");
    }

    /**
     * Tell the router to do a navigate
     */
    _handleDown(){
        Router.navigate("this/route/does/not/exist");
    }

    /**
     * References to all the widgets are available via:
     * this.widgets
     * @private
     */
    _handleEnter(){
        this.widgets.notification.notify(`Error while playing: ${this._videoId}`);
    }

    // dynamic hash data will be automatically set as property
    // on the instance of the page

    set videoId(v){
        this._videoId = v;
        this.tag("Label").text = `Player page \nvideoId: ${v}`;
    }

    easing(){
        return "crossFade";
    }
}