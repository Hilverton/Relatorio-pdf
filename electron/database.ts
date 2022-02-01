import path from 'path'
import Loki from 'lokijs'

interface IInsertMember {
  name: string
  code: string
}

const db = new Loki(path.resolve(__dirname, 'database.db'), {
  autoload: true,
  autoloadCallback: databaseInitialize,
  autosave: true,
  autosaveInterval: 4000,
})

function databaseInitialize() {
  let members = db.getCollection('members')
  if (members === null) {
    members = db.addCollection('members')
  }
}

function insertMember(member: IInsertMember) {
  const membersCount = db.getCollection('members').count()
  console.log('number of members in database : ' + membersCount)
  const members = db.getCollection('members')
  members?.insert({ id: membersCount + 1, ...member })
}

function getMembers() {
  const members = db.getCollection('members').data
  console.log('lista de membros', members)
}

export { insertMember, getMembers }
