import React, { Component } from "react";
import MaterialTable from "material-table";

export default class component extends Component {
  state = {
    columns: [],
    data: []
  };

  componentDidMount() {
    this.setState({
      columns: this.props.columns,
      data: this.props.data
    });
  }

  _AddHandler = (newData, resolve) => {
    setTimeout(() => {
      resolve();
      this.setState(prevState => {
        const data = [...prevState.data];
        data.push(newData);
        return { ...prevState, data };
      });
      this.props.add(newData);
    }, 600);
  };

  _EditHandler = (newData, oldData, resolve) => {
    setTimeout(() => {
      resolve();
      if (oldData) {
        this.setState(prevState => {
          const data = [...prevState.data];
          data[data.indexOf(oldData)] = newData;
          return { ...prevState, data };
        });
        this.props.edit(newData, oldData);
      }
    }, 600);
  };

  _DeleteHandler = (oldData, resolve) => {
    setTimeout(() => {
      resolve();
      this.setState(prevState => {
        const data = [...prevState.data];
        data.splice(data.indexOf(oldData), 1);
        return { ...prevState, data };
      });
      this.props.deletes(oldData);
    }, 600);
  };

  render() {
    return (
      <MaterialTable
        title={this.props.title}
        columns={this.state.columns}
        data={this.state.data}
        editable={{
          onRowAdd: newData =>
            new Promise(resolve => {
              this._AddHandler(newData, resolve);
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise(resolve => {
              this._EditHandler(newData, oldData, resolve);
            }),
          onRowDelete: oldData =>
            new Promise(resolve => {
              this._DeleteHandler(oldData, resolve);
            })
        }}
        options={{
          actionsColumnIndex: -1
        }}
      />
    );
  }
}
