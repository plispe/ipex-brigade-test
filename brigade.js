const { events, Job } = require("brigadier")

events.on("exec", (brigadeEvent, project) => {
  const importDb = new Job('import-db', 'petrpliska/db-dump:0.0.5')

  importDb.env['MYSQL_PASSWORD'] = 'NldvYfFTTH'
  importDb.run()
})