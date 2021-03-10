import { SchemaSubject, SchemaType } from 'generated-sources';

export const schema: SchemaSubject = {
  subject: 'test',
  version: '1',
  id: 1,
  schema:
    '{"type":"record","name":"MyRecord1","namespace":"com.mycompany","fields":[{"name":"id","type":"long"}]}',
  compatibilityLevel: 'BACKWARD',
  schemaType: SchemaType.JSON,
};

export const versions: SchemaSubject[] = [
  {
    subject: 'test',
    version: '1',
    id: 1,
    schema:
      '{"type":"record","name":"MyRecord1","namespace":"com.mycompany","fields":[{"name":"id","type":"long"}]}',
    compatibilityLevel: 'BACKWARD',
    schemaType: SchemaType.JSON,
  },
  {
    subject: 'test',
    version: '2',
    id: 2,
    schema:
      '{"type":"record","name":"MyRecord2","namespace":"com.mycompany","fields":[{"name":"id","type":"long"}]}',
    compatibilityLevel: 'BACKWARD',
    schemaType: SchemaType.JSON,
  },
];
