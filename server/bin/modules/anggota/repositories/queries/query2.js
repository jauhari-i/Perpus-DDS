const conn = require('../../../../helpers/databases/mysql/connection')

class Query {

  async getAnggota(){
    conn.query('SELECT * from ANGGOTA', (err, rows) => {
      if (err) throw err;
      return console.log('data di get');

    });


  };
};

module.exports = Query;