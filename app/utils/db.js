import lowdb from 'lowdb';

const db = lowdb('./config/db.json');

db.defaults({
  pages: []
}).value()

export default db.get('pages')