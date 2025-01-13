const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'crud_app_db',
  password: '1234567',
  port: 5432,
});

pool.connect()
  .then(() => console.log('Conexão com o banco de dados PostgreSQL estabelecida com sucesso.'))
  .catch(err => console.error('Não foi possível conectar ao banco de dados PostgreSQL:', err));

module.exports = pool;