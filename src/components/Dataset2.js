import React, { Component } from "react";

class Dataset2 extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    listitems: [
      {
        id: 0,
        context: "Light",
        modifier: "list-group-item list-group-item-light"
      },
      {  id: 1,
        context: "Info",
        modifier: "list-group-item list-group-item-info"
     },
     {
        id: 2,
        context: "Danger",
        modifier: "list-group-item list-group-item-danger"
      },
      {
        id: 3,
        context: "Warning",
        modifier: "list-group-item list-group-item-warning"
      },
      {
        id: 4,
        context: "Success",
        modifier: "list-group-item list-group-item-success"
      },
      {
        id: 5,
        context: "Secondary",
        modifier: "list-group-item list-group-item-secondary"
      },
    {  id: 6,
       context: "Light",
       modifier: "list-group-item list-group-item-light"
    },
    {  id: 7,
        context: "Secondary",
        modifier: "list-group-item list-group-item-secondary"
     },
     {  id: 8,
        context: "Dark",
        modifier: "list-group-item list-group-item-dark"
     },
     {  id: 9,
        context: "Light",
        modifier: "list-group-item list-group-item-light"
     },
     {  id: 10,
        context: "Info",
        modifier: "list-group-item list-group-item-info"
     },
     {
        id: 11,
        context: "Danger",
        modifier: "list-group-item list-group-item-danger"
     },
     {  id: 12,
        context: "Warning",
        modifier: "list-group-item list-group-item-warning"
     },
     {  id: 13,
        context: "Success",
        modifier: "list-group-item list-group-item-success"
      },
      {  id: 14,
        context: "Secondary",
        modifier: "list-group-item list-group-item-secondary"
     },
    {  id: 15,
       context: "Dark",
       modifier: "list-group-item list-group-item-dark"
    }
   
    ]
  };

  render() {
    return (
      <React.Fragment>
        <ul className={`list-group ${this.props.className}`}>
          {this.state.listitems.map(listitem => (
            <li key={listitem.id} className={listitem.modifier}>
              {listitem.context}
            </li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

export default Dataset2;