import { app, BrowserWindow, ipcMain } from 'electron'
import {
  insertMember,
  getMembers,
  updateMember,
  deleteMember,
} from './database'

let mainWindow: BrowserWindow | null

declare const MAIN_WINDOW_WEBPACK_ENTRY: string
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string

// const assetsPath =
//   process.env.NODE_ENV === 'production'
//     ? process.resourcesPath
//     : app.getAppPath()

function createWindow() {
  mainWindow = new BrowserWindow({
    // icon: path.join(assetsPath, 'assets', 'icon.png'),
    width: 1100,
    height: 700,
    backgroundColor: '#191622',
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
    },
  })

  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY)

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

interface IContent {
  name: string
  code: string
}

interface IContentMember extends IContent {
  savedCode: string
}

async function registerListeners() {
  ipcMain.on('message', (_, message) => {
    console.log(message)
  })

  ipcMain.on('put', (event, content: IContent) => {
    insertMember(content)
    const members = getMembers()
    event.reply('get', members)
  })

  ipcMain.on('update', (event, contentMember: IContentMember) => {
    updateMember(contentMember)
    const members = getMembers()
    event.reply('get', members)
  })

  ipcMain.on('delete', (event, code: string) => {
    deleteMember(code)
    const members = getMembers()
    event.reply('get', members)
  })

  ipcMain.on('get', event => {
    const members = getMembers()
    event.reply('get', members)
  })
}

app
  .on('ready', createWindow)
  .whenReady()
  .then(registerListeners)
  .catch(e => console.error(e))

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
