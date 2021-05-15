import React from "react";
class Mouse extends React.Component {
    constructor(props) {
      super(props);
      this.onMouseMove=this.onMouseMove.bind(this);
      this.state = {
           x: 0,
           y: 0 };
    }
    handleEvent = (event) => {
      if (event.type === "mousedown") {
             this.setState({ message: "Mouse Down"});
         } else {
             this.setState({ message: "Mouse Up"});
         }
     }
  
    componentDidMount(){
        window.addEventListener('onMouseMove',this.onMouseMove,true);
    }
    componentWillUnmount(){
        window.removeEventListener('onMouseMove',this.onMouseMove);
    }
    onMouseMove(e) {
      this.setState(
          { x: e.screenX,
            y: e.screenY 
        });
        console.log(this.state.x);
    }

    render() {
    //   const { x, y } = this.state;
    //   return <div onMouseMove={this._onMouseMove.bind(this)}>
    //     <h1>Mouse coordinates: { x } { y }</h1>
    //   </div>;
    return (
    <div>

    </div>)
    }
  }
  export default Mouse;