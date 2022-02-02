// import path from 'path'
import Loki from 'lokijs'

interface IInsertMember {
  id: number
  name: string
  code: string
}

const db = new Loki('database.db', {
  autoload: true,
  autoloadCallback: databaseInitialize,
  autosave: true,
  autosaveInterval: 4000,
})

function databaseInitialize() {
  let members = db.getCollection<IInsertMember>('members')
  if (members === null) {
    members = db.addCollection<IInsertMember>('members')
  }
}

function insertMember(member: Omit<IInsertMember, 'id'>) {
  const membersCount = db.getCollection('members').count()
  console.log('number of members in database : ' + membersCount)
  const members = db.getCollection('members')
  members?.insert({ id: membersCount + 1, ...member })
}

function getMembers() {
  const members = db.getCollection<IInsertMember>('members').data
  return members
}

export { insertMember, getMembers, IInsertMember }
