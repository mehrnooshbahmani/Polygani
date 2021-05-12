import React from "react";
import { BrowserRouter as Router, Route, Switch, withRouter} from "react-router-dom";
import { Navigation, Home, About, Contact,Dataset, Header, HeaderStyle, Mouse} from "./";
import '../App.css';
class MyComponent extends React.Component {
 
    constructor(props)
    {
        super(props);
        this.onScroll=this.onScroll.bind(this);
        this.state={
            finalHeight: 0,
            height: window.scrollY,
            flag: true
        }
    }
    componentDidMount(){
        window.addEventListener('scroll',this.onScroll,true);
    }
    componentWillUnmount(){
        window.removeEventListener('scroll',this.onScroll);
    }
    onScroll(){
        let nextHeight=window.scrollY;
        this.setState(function(previousState, currentProps){
            return{
                finalHeight: (previousState.height-nextHeight),
                flag: (nextHeight < previousState.height),
                height: nextHeight
                
            }
        });

        console.log(this.state.finalHeight);
        console.log(this.state.flag);
       
    }

    render() {
      return (
        <Router>
        <Mouse></Mouse>
        <Header  className={`${
            this.state.flag ? "moved"   : null
          }`}/>
            <Navigation className={`${
            this.state.flag ?  null  : "fixed"
          }`} />
            <Switch>
              <Route path="/about" exact component={() => <About className={`${
            this.state.flag ?  null  : "scroll"
          }`} />} />
              <Route path="/data" exact component={() => <Dataset className={`${
            this.state.flag ?  null  : "scroll"
          }`} />} />
            </Switch>
          </Router>
      )
        }
    }
  export default MyComponent;