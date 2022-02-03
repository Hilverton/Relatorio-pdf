import { contextBridge, ipcRenderer } from 'electron'

export const api = {
  sendMessage: (message: string) => {
    ipcRenderer.send('message', message)
  },

  insertMember: (name: string, code: string) => {
    ipcRenderer.send('put', { name, code })
  },

  getMembers: () => {
    ipcRenderer.send('get')
  },

  updateMember: (name: string, code: string, savedCode: string) => {
    ipcRenderer.send('update', { name, code, savedCode })
  },

  deleteMember: (code: string) => {
    ipcRenderer.send('delete', code)
  },

  on: (channel: string, callback: Function) => {
    ipcRenderer.on(channel, (_, data) => callback(data))
  },
}

contextBridge.exposeInMainWorld('Main', api)
