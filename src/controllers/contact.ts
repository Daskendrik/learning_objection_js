import { GetDataNow } from '../Tool/GetDataNow.js';
import { FormatData } from '../Tool/FormatData.js';
import { Contact } from '../models/Contact.js';
const rowId = 10;

export async function getAll(
  req: any,
  res: { status: (arg0: number) => { (): any; new (): any; json: { (arg0: { req: Contact[] }): void; new (): any } } },
) {
  const allContact = await Contact.query();
  res.status(200).json({
    req: allContact,
  });
}

export async function getById(
  req: any,
  res: {
    status: (arg0: number) => {
      (): any;
      new (): any;
      json: { (arg0: { req: Contact | undefined }): void; new (): any };
    };
  },
) {
  const testId = 5;
  const ContactById = await Contact.query().findById(testId);
  res.status(200).json({
    req: ContactById,
  });
}

export async function getAllOrderById(
  req: any,
  res: { status: (arg0: number) => { (): any; new (): any; json: { (arg0: { req: Contact[] }): void; new (): any } } },
) {
  const allContact = await Contact.query().orderBy('id');
  res.status(200).json({
    req: allContact,
  });
}

export async function getLastId(
  req: any,
  res: { status: (arg0: number) => { (): any; new (): any; json: { (arg0: { req: Contact[] }): void; new (): any } } },
) {
  const maxID = await Contact.query().max('id');
  res.status(200).json({
    req: maxID,
  });
}

export async function create(
  req: any,
  res: { status: (arg0: number) => { (): any; new (): any; json: { (arg0: { req: Contact }): void; new (): any } } },
) {
  const result = await Contact.query().insert({ id: rowId, first_name: 'TestObj' });
  res.status(200).json({
    req: result,
  });
}

export async function deleteRow(
  req: any,
  res: { status: (arg0: number) => { (): any; new (): any; json: { (arg0: { req: number }): void; new (): any } } },
) {
  const result = await Contact.query().deleteById(rowId);
  res.status(200).json({
    req: result,
  });
}

export async function update(
  req: any,
  res: { status: (arg0: number) => { (): any; new (): any; json: { (arg0: { req: number }): void; new (): any } } },
) {
  const result = await Contact.query().findById(rowId).patch({ first_name: 'TestUpdate' });
  res.status(200).json({
    req: result,
  });
}
