import React from "react";
import { BrowserRouter as Router, Route, Switch, withRouter} from "react-router-dom";
import { Navigation, Dataset, Dataset2, Header} from "./";
import '../App.css';
class MyComponent extends React.Component {
 
    constructor(props)
    {
        super(props);
        this.onScroll=this.onScroll.bind(this);
        this.updateDimensions=this.updateDimensions.bind(this);
        this.onselect=this.onselect.bind(this);
        
        this.state={
            finalHeight: 0,
            height: window.scrollY,
            flag: true,
            finalWidth: 0,
            width: window.innerWidth,
            flagWidth: true
        }
    }
    
    componentDidMount(){
        window.addEventListener('scroll',this.onScroll,true);
        window.addEventListener('resize', this.updateDimensions,true);
        window.addEventListener('resize', this.onselect,true);
    }
    componentWillUnmount(){
        window.removeEventListener('scroll',this.onScroll);
        window.removeEventListener("resize", this.updateDimensions);
        window.removeEventListener("resize", this.onselect);
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
    updateDimensions() {
      let nextWidth=window.innerWidth;
      this.setState(function(previousState, currentProps){
          return{
              finalWidth: (previousState.height-nextWidth),
              flagWidth: (nextWidth < previousState.width),
              width: nextWidth
              
          }
      });
        console.log(this.state.width);
        console.log(this.state.finalWidth);
        console.log(this.state.flagWidth);
    }
    onselect(){
      console.log(window.onselect);
    }

    render() {
      return (
        <Router>
        <Header  className={`${
            this.state.flag ? "movedTrue"   : "movedFalse"
          }`}/>
            <Navigation className1={`${
            this.state.flag ?  null  : "fixed"
          }`}
          className2= {`${this.state.flagWidth ? "nav-link-active" : "nav-link"}`}
          className3= {`${this.state.flagWidth ? "nav-link" : "nav-link-active"}`}
          />
            <Switch>
            <Route path="/" exact component={() =>{ 
              if (this.state.flagWidth)
           return( <Dataset2 className={`${
            this.state.flag ?  null  : "scroll"
          }`} />)
          else
         return( <Dataset className={`${
            this.state.flag ?  null  : "scroll"
          }`} />)
          } }/>  
              <Route path="/purchase"  exact component={() =>{ 
                if (this.state.flagWidth)
          return( <Dataset2 className={`${
            this.state.flag ?  null  : "scroll"
          }`} />)
        else
        return( <Dataset className={`${
          this.state.flag ?  null  : "scroll"
        }`} />)
         } }/>
              <Route path="/wishlist" exact component={() =>{
                if (this.state.flagWidth)
            return( <Dataset className={`${
            this.state.flag ?  null  : "scroll"
          }`} />)
            return( <Dataset2 className={`${
            this.state.flag ?  null  : "scroll"
          }`} />)
              }} />
            </Switch>
          </Router>
      )
        }
    }
  export default MyComponent;