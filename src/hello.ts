import {baseUrl} from './devAccount';
import {createOAuth} from './createOAuth';
import {RecordsApi} from './logicgate-api/RecordsApi';
import {WorkflowsApi} from './logicgate-api/WorkflowsApi';
import {FieldsApi} from './logicgate-api/FieldsApi';
import {OAuth} from './logicgate-api/Authentication';
import {Field} from './logicgate-api/Field';
import {Record} from './logicgate-api/Record';

async function fetchWorkflowId(stepId: string, oauth: OAuth) {
  const workflowsApi = new WorkflowsApi(baseUrl);
  workflowsApi.setDefaultAuthentication(oauth);
  const res1 = await workflowsApi.findByStepUsingGET(stepId);
  return res1.body.id!;
}

async function fetchWorkflowFields(workflowId: string, oauth: OAuth) {
  const fieldsApi = new FieldsApi(baseUrl);
  fieldsApi.setDefaultAuthentication(oauth);
  const res2 = await fieldsApi.findByWorkflowWithValuesUsingGET(workflowId);
  return res2.body;
}

function buildRecord(fields: Field[], stepId: string): Record {
  const field = fields.find(it => it.name === 'Name (Full):')!;
  console.log('Name (Full):', field);

  return {
    'step': {
      'id': stepId,
    },
    'currentValueMaps': [
      {
        currentValues: [
          {
            textValue: 'Freewind-from-realapi',
            discriminator: 'Common',
          },
        ],
        field: {
          id: field.id,
          fieldType: field.fieldType,
        },
      },
    ],
  };
}

async function createRecord(record: Record, oauth: OAuth) {
  const recordsApi = new RecordsApi(baseUrl);
  recordsApi.setDefaultAuthentication(oauth);
  const res = await recordsApi.createPublicUsingPOST(record);
  return res;
}

async function main() {
  const oauth = await createOAuth();

  const stepId = '7Ycf0hko'; // contacts

  const workflowId = await fetchWorkflowId(stepId, oauth);
  console.log('workflowId: ', workflowId);

  const fields = await fetchWorkflowFields(workflowId, oauth);
  console.log('fields:', fields);

  const record: Record = buildRecord(fields, stepId);
  const res = await createRecord(record, oauth);
  console.log('record creation response: ', res);
}

main();
