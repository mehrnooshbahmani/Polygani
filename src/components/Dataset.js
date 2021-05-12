import React, { Component } from "react";

class Dataset extends Component {
  state = {
    listitems: [
      {
        id: 0,
        context: "Light",
        modifier: "list-group-item list-group-item-light"
      },
      {
        id: 1,
        context: "Secondary",
        modifier: "list-group-item list-group-item-secondary"
      },
      {
        id: 2,
        context: "Success",
        modifier: "list-group-item list-group-item-success"
      },
      {
        id: 3,
        context: "Warning",
        modifier: "list-group-item list-group-item-warning"
      },
      {
        id: 4,
        context: "Danger",
        modifier: "list-group-item list-group-item-danger"
      },
    {  id: 5,
       context: "Info",
       modifier: "list-group-item list-group-item-info"
    },
    {  id: 6,
       context: "Light",
       modifier: "list-group-item list-group-item-light"
    },
    {  id: 7,
       context: "Dark",
       modifier: "list-group-item list-group-item-dark"
    },
    {  id: 8,
       context: "Secondary",
       modifier: "list-group-item list-group-item-secondary"
    },
    {  id: 9,
      context: "Success",
      modifier: "list-group-item list-group-item-success"
    },
    {  id: 10,
      context: "Warning",
      modifier: "list-group-item list-group-item-warning"
   }
    ]
  };

  render() {
    return (
      <React.Fragment>
        <ul className="list-group">
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

export default Dataset;