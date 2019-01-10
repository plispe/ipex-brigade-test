const { events, Job } = require("brigadier")
const dbImage = 'petrpliska/db-dump:0.0.13'
const dbPrefix = 'VPC-2355_'

events.on('create-mysql-dbs', () => {
  const createDBs = new Job('create-mysql-dbs', dbImage)
  createDBs.env['MYSQL_PASSWORD'] = 'ipex-mysql'
  createDBs.env['MYSQL_USER'] = 'root'
  createDBs.env['MYSQL_HOST'] = 'mysql.ipex.cloud'
  createDBs.env['DB_PREFIX'] = dbPrefix
  createDBs.run()

})

events.on('drop-mysql-dbs', () => {
  const dropDBs = new Job('drop-mysql-dbs', dbImage)
  dropDBs.tasks = ['./remove_databases.sh']
  dropDBs.env['MYSQL_PASSWORD'] = 'ipex-mysql'
  dropDBs.env['MYSQL_USER'] = 'root'
  dropDBs.env['MYSQL_HOST'] = 'mysql.ipex.cloud'
  dropDBs.env['DB_PREFIX'] = dbPrefix
  dropDBs.run()
})
