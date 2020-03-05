export const tableFunction = {
  Add: newData =>
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
  Edit: (newData, oldData) =>
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
  Delete: oldData =>
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
};
