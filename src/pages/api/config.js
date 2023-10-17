// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { promises as fs } from "fs";

const file = await fs.readFile(process.cwd() + '/data/content.json', 'utf8');

// eslint-disable-next-line import/no-anonymous-default-export
export default (_req, res) => {
  res.status(200).json(file)
}
