var SequelizeAuto = require('sequelize-auto')
var auto = new SequelizeAuto('admin_freshvictoria', 'admin_admin', 'Icm@oc90',{
  host: 'localhost',
  port:'3306'
});
const fs = require('fs');

auto.run(function (err) {
    if (err) throw err;
    fs.appendFile('data.txt', 'tables:1111111111111111111111111111111111111111', (err) => {
        if (err) throw err;
        console.log('The "data to append" was appended to file!');
      });
/*    fs.appendFile('data.txt', JSON.stringify(auto.tables, null, "\t"), (err) => {
        if (err) throw err;
        console.log('The "data to append" was appended to file!');
      });
    fs.appendFile('data.txt', 'foreign:2222222222222222222222222222222222222', (err) => {
        if (err) throw err;
        console.log('The "data to append" was appended to file!');
      });
    fs.appendFile('data.txt', JSON.stringify(auto.foreignKeys, null, "\t"), (err) => {
        if (err) throw err;
        console.log('The "data to append" was appended to file!');
      });*/
});
