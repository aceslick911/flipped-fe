import fs from 'fs'
import path from 'path'

const files = {
  accounts: './accounts.json',
}

for (const dataFile in files) {
  files[dataFile] = path.resolve(__dirname, files[dataFile])
  if (!fs.existsSync(files[dataFile])) {
    fs.writeFileSync(files[dataFile], '[]')
  }
}

export function saveData(dataType: keyof typeof files, data: any) {
  let existingData = [] as string[]

  if (fs.existsSync(files[dataType])) {
    const rawData = fs.readFileSync(files[dataType], 'utf-8')
    existingData = JSON.parse(rawData) as string[]
  }
  existingData.splice(0, 0, data)

  fs.writeFileSync(files[dataType], JSON.stringify(existingData, null, 2))
}

export const credentials = {
  gmail: {
    email: 'flipped.tests@gmail.com',
    password: 'qovxI6-jesras-vonqib',
  },
}
