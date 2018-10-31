const { events, Job } = require("brigadier")

events.on("exec", (brigadeEvent, project) => {
  const dbImage = 'petrpliska/db-dump:0.0.9'
  const dbPrefix = 'VPC-2355_'
  const importDb = new Job('import-db', dbImage)

  // importDb.env['MYSQL_PASSWORD'] = 'NldvYfFTTH'
  // importDb.env['DB_PREFIX'] = dbPrefix
  // importDb.run()

  const removeDBs = new Job('remove-dbs', dbImage)
  removeDBs.tasks = ['./remove_databases.sh']
  removeDBs.env['MYSQL_PASSWORD'] = 'NldvYfFTTH'
  removeDBs.env['DB_PREFIX'] = dbPrefix
  removeDBs.run()
})