import { GetDataNow } from '../Tool/GetDataNow.js';
import { FormatData } from '../Tool/FormatData.js';
import { Contact } from '../models/Contact.js';

export async function getAll(res: {
  status: (arg0: number) => { (): any; new (): any; json: { (arg0: { req: Contact[] }): void; new (): any } };
}) {
  const allContact = await Contact.query();
  res.status(200).json({
    req: allContact,
  });
}

export async function getById(res: {
  status: (arg0: number) => {
    (): any;
    new (): any;
    json: { (arg0: { req: Contact | undefined }): void; new (): any };
  };
}) {
  const testId = 5;
  const ContactById = await Contact.query().findById(testId);
  res.status(200).json({
    req: ContactById,
  });
}
