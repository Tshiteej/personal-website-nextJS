// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import { promises as fs } from "fs";

import fs from 'fs'
import path from 'path'

// const file = await fs.readFile(process.cwd() + '/data/content.json', 'utf8');

const dir = path.resolve('./public', 'configs');
const data = path.join(``, 'content.json')
const file = fs.readFileSync(data)

let resp = Buffer.from(file)

// eslint-disable-next-line import/no-anonymous-default-export
export default (_req, res) => {
  console.log({data}, "---DATA---")
  console.log({file}, "---FILE---")
  console.log({resp}, "---RESP---")
  res.status(200).json({resp})
}
