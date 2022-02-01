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

  on: (channel: string, callback: Function) => {
    ipcRenderer.on(channel, (_, data) => callback(data))
  },
}

contextBridge.exposeInMainWorld('Main', api)
