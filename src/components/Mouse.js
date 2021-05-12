import React from "react";
class Mouse extends React.Component {
    constructor(props) {
      super(props);
      this.onMouseMove=this.onMouseMove.bind(this);
      this.state = {
           x: 0,
           y: 0 };
    }
  
    componentDidMount(){
        window.addEventListener('mouse',this.onMouseMove,true);
    }
    componentWillUnmount(){
        window.removeEventListener('mouse',this.onMouseMove);
    }
    onMouseMove(e) {
      this.setState(
          { x: e.screenX,
            y: e.screenY 
        });
        console.log(e);
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