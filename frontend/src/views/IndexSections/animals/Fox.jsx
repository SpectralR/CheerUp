import React from 'react';
import anime from 'animejs';

class Fox extends React.Component {
    constructor (){
        super();
        this.state = {
            animate: 0,
            floatingHearts: false,
        }
    }
    
    hearts(animate){
        let doIt = Math.round(Math.random());
        if (doIt === 1) {
            this.setState({
                animate: animate,
                floatingHearts: true,
            });
        } else {
            this.setState({
                animate: animate,
                floatingHearts: false,
            });
        }
    }

    animate = param => e => {
        if (!anime.running.length) {
            this.tailAnimation();
        }
        
        let animation = Math.floor(Math.random() * 10);
        this.hearts(animation);
        
        switch (this.state.animate){
            // ears
            case 1:
                this.earsAnimation();
                break;
            // head
            case 2:
                this.headAnimation(headDone);
                break;
        }  
    }
    //@TODO check if head is tilted for ears animations and check for each animation if it happened, if yes revert it!
    earsAnimation(){
        // right ear animation
        anime({
            targets: '#right-ear',
            translateX: 17,
            translateY: -5,
            rotate: 15,
            easing: 'linear'
        });
        //left ear animation
        anime({
            targets: '#left-ear',
            translateX: 17,
            translateY: -5,
            rotate: 15,
            easing: 'linear'
        });

    }

    tailAnimation(){
        anime({
            targets: '#tail',
            translateX: -30,
            translateY: 5,
            rotate: -15,
            loop: true,
            duration: 500,
            direction: 'alternate',
            easing: 'linear'
        });
    }

    headAnimation(headDone){
        console.log(headDone);
        if (headDone){
            anime({
                targets: ['#head', '#left-ear', '#right-ear'],
                rotate: -10,
                translateX: -15,
                translateY: 5,
                easing: 'linear'
            })
            headDone = false;
            return headDone;
        }
        anime({
            targets: ['#head', '#left-ear', '#right-ear'],
            rotate: 10,
            translateX: 15,
            translateY: -5,
            easing: 'linear'
        })
        headDone = true;
        return headDone;
    }
    

    render() {
        return (
            <>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 121.1 121.1" >
                    {/* tail */}
                    <g id='tail'>
                        <path d="M63.3 84.6c9.9 8.1 22.9 2.7 30.5-5.8 0.6-0.7 1.3-1.3 2-1.8 3.3-0.2 6.8 0.2 9.7 1.8 0 0-5.2 3.9-7.2 8.2 0 0 5.8 1.2 10.4-1.7 0 0-0.6 6.9-5.4 12.8 -1.5 0.5-3.2 0.9-4.9 1.2 -30 5.9-38.7-11.1-38.7-11.1L63.3 84.6z" fill="#D45136" onMouseEnter={this.animate()}/>
                        <path d="M98.4 87c2-4.3 7.2-8.2 7.2-8.2 -2.9-1.6-6.4-2-9.7-1.8 8.5-6.7 24.2-6.9 24.2-6.9s7.4 20.7-16.7 28.1c4.9-5.9 5.4-12.8 5.4-12.8C104.2 88.2 98.4 87 98.4 87z" className="a" onMouseEnter={this.animate()}/>
                    </g>
                    {/* belly */}
                    <path d="M81.7 78.8c0 19.2 0 34.9-34.7 34.7h-0.6c-34.7 2.4-34.7-15.5-34.7-34.7v-0.6c0-19.2 15.5-34.7 34.7-34.7h0.6c19.2 0 34.7 15.5 34.7 34.7V78.8z" className="b" onMouseEnter={this.animate()} />
                    {/* ear right */}
                    <g id="right-ear" onMouseEnter={this.animate()}>
                        <path d="M65.8 20c0 0 9-12.7 26.4-12.7 0 0 1.8 16.4-9.4 29.1" className="b" />
                        <path d="M65.9 23.7c0 0 7-9.8 20.5-9.8 0 0 1.4 12.7-7.3 22.6" className="c" />
                    </g>
                    {/* ear left */}
                    <g id="left-ear" onMouseEnter={this.animate()}>
                        <path d="M26.5 20c0 0-9-12.7-26.4-12.7 0 0-1.8 16.4 9.4 29.1" className="b" />
                        <path d="M26.4 23.7c0 0-7-9.8-20.5-9.8 0 0-1.4 12.7 7.3 22.6" className="c" />
                    </g>
                    {/* orange head */}
                    <g id='head' onMouseEnter={this.animate()}>
                        <path d="M46.7 13c0 0-36.6 0-45.6 46.2 0 0 34.2-6.9 45.6 10.8 9.2-15.9 45.6-10.8 45.6-10.8C83.3 13 46.7 13 46.7 13z" className="b" onMouseEnter={this.animate()} />
                        {/* left eye section */}
                        <path d="M20.9 23c0 0 5.4 2.4 13.2 13.9 8.4 12.2 6.5 27.1 6.5 27.1s-10.2-7.3-39.5-4.8C1.1 59.2 3.1 36.3 20.9 23z" className="a" />
                        {/* right eye section */}
                        <path d="M72.6 23c0 0-5.4 2.4-13.2 13.9 -8.4 12.2-6.5 27.1-6.5 27.1s10.2-7.3 39.5-4.8C92.4 59.2 90.4 36.3 72.6 23z" className="a" />
                        {/* right eye */}
                        <circle cx="65.8" cy="42.2" r="3.8" className="d" />
                        <circle cx="67.4" cy="41.5" r="1.4" className="e" />
                        {/* left eye */}
                        <circle cx="27.7" cy="42.2" r="3.8" className="d" />
                        <circle cx="29.1" cy="41.5" r="1.4" className="e" />
                        {/* nose */}
                        <path d="M52.7 64c0 3.3-2.7 6-6 6 -3.3 0-6-2.7-6-6" className="d"/>
                    </g>
                </svg>
            </>
        )
    }
}
export default Fox;