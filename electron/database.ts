import Loki from 'lokijs'

interface IInsertMember {
  id: number
  name: string
  code: string
}

interface IUpdateMember extends Omit<IInsertMember, 'id'> {
  savedCode: string
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
  const members = db.getCollection('members')
  members?.insert({ id: membersCount + 1, ...member })
}

function updateMember(member: IUpdateMember) {
  const memberDB = db.getCollection<IInsertMember>('members')
  const memberFound = memberDB.findOne({ code: member.savedCode })
  if (memberFound !== null) {
    memberFound.code = member.code
    memberFound.name = member.name
    memberDB.update(memberFound)
  }
}

function deleteMember(code: string) {
  const memberDB = db.getCollection<IInsertMember>('members')
  const memberFound = memberDB.findOne({ code })
  if (memberFound !== null) {
    memberDB.remove(memberFound)
    memberDB.chain().data()
  }
}

function getMembers() {
  const members = db.getCollection<IInsertMember>('members').data
  return members
}

export { insertMember, getMembers, updateMember, deleteMember, IInsertMember }
