import { Model } from '../settings/db';
import { LOV } from './LOV';

export class Contact extends Model {
  static fullName(): () => string {
    throw new Error('Method not implemented.');
  }
  created: any;
  last_name: any;
  id: any;
  first_name: any;
  update: any;
  lov_name: any;
  tel: any;
  name: string | undefined;
  lov_type: string | undefined;
  middle_name: any;
  max: any;
  full_name: any;
  static get tableName() {
    //название таблицы
    return 'tr_contact';
  }
  static get idColumn() {
    //уникальный ключ
    return 'id';
  }

  //связи
  static relationMappings = {
    lov: {
      relation: Model.HasOneRelation,
      modelClass: LOV,
      join: {
        from: 'tr_contact.type_code',
        to: 'tr_lov.code',
      },
    },
  };
  fullName() {
    return this.first_name + ' ' + this.last_name;
  }
}
