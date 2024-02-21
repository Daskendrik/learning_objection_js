import { GetDataNow } from '../Tool/GetDataNow.js';
import { FormatData } from '../Tool/FormatData.js';
import { Contact } from '../models/Contact.js';

export async function getAll(
  req: any,
  res: { status: (arg0: number) => { (): any; new (): any; json: { (arg0: { req: Contact[] }): void; new (): any } } },
) {
  const allContact = await Contact.query();
  res.status(200).json({
    req: allContact,
  });
}
