import React from "react";


let timer = null;

class CountDown extends React.Component {

    state = {
        count: 5
    }

    

    componentDidMount(){
        timer = setInterval(() => {
            this.setState({
                count: this.state.count  - 1,
            })
        }, 1000);
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.count !== this.state.count && this.state.count === 0){
            if(timer){
                clearInterval(timer)
                // this.props.timeOut()
            }
        }
    }

    

    render(){
            return (
                <>
                    <h2>{this.state.count}</h2>
                </>
            )
    }
}

export default CountDown;