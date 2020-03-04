import React, { Component } from "react";
import MaterialTable from "material-table";

export default class component extends Component {
  constructor(props) {
    super(props);

    this.state = {
      columns: [],
      data: "test"
    };
  }

  // componentDidMount() {
  //   console.log("[CDM] " + this.props.columns);
  //   this.setState({
  //     columns: this.props.columns,
  //     data: this.props.data
  //   });
  // }

  render() {
    console.log(this.props.data);
    // console.log("[render] " + this.state.data);
    return (
      <MaterialTable
        title={this.props.title}
        columns={this.props.columns}
        data={this.props.data}
        editable={{
          onRowAdd: newData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                this.setState(prevState => {
                  const data = [...prevState.data];
                  data.push(newData);
                  return { ...prevState, data };
                });
              }, 600);
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                if (oldData) {
                  this.setState(prevState => {
                    const data = [...prevState.data];
                    data[data.indexOf(oldData)] = newData;
                    return { ...prevState, data };
                  });
                }
              }, 600);
            }),
          onRowDelete: oldData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                this.setState(prevState => {
                  const data = [...prevState.data];
                  data.splice(data.indexOf(oldData), 1);
                  return { ...prevState, data };
                });
              }, 600);
            })
        }}
        options={{
          actionsColumnIndex: -1
        }}
      />
    );
  }
}

// BACKUP

// import React from 'react';
// import MaterialTable from 'material-table';

// export default function MaterialTableDemo() {
//   const [state, setState] = React.useState({
//     columns: [
//       { title: 'Name', field: 'name' },
//       { title: 'Surname', field: 'surname' },
//       { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
//       {
//         title: 'Birth Place',
//         field: 'birthCity',
//         lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
//       },
//     ],
//     data: [
//       { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
//       {
//         name: 'Zerya Betül',
//         surname: 'Baran',
//         birthYear: 2017,
//         birthCity: 34,
//       },
//     ],
//   });

//   return (
//     <MaterialTable
//       title="Editable Example"
//       columns={state.columns}
//       data={state.data}
//       editable={{

//       }}
//     />
//   );
// }
