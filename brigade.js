const { events, Job } = require("brigadier")

events.on("exec", (brigadeEvent, project) => {
  const importDb = new Job('import-db', 'petrpliska/db-dump:0.0.6')

  importDb.env['MYSQL_PASSWORD'] = 'NldvYfFTTH'
  importDb.env['DB_PREFIX'] = 'VPC-2355_'
  importDb.run()
})