import {clientSecret} from './devAccount';
import {createOAuth} from './createOAuth';
import {RecordsApi} from 'typescript-logicgate-api-demo/dist/public-api/RecordsApi';
import {WorkflowsApi} from 'typescript-logicgate-api-demo/dist/public-api/WorkflowsApi';
import {FieldsApi} from 'typescript-logicgate-api-demo/dist/public-api/FieldsApi';
import {OAuth} from 'typescript-logicgate-api-demo/dist/public-api/Authentication';
import {Field} from 'typescript-logicgate-api-demo/dist/public-api/Field';
import {Record} from 'typescript-logicgate-api-demo/dist/public-api/Record';
import {fetchToken} from 'typescript-logicgate-api-demo/dist/extra-api/fetchToken';

async function fetchWorkflowId(baseUrl: string, stepId: string, oauth: OAuth) {
  const workflowsApi = new WorkflowsApi(baseUrl);
  workflowsApi.setDefaultAuthentication(oauth);
  const res1 = await workflowsApi.findByStepUsingGET(stepId);
  return res1.body.id!;
}

async function fetchWorkflowFields(baseUrl: string, workflowId: string, oauth: OAuth) {
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

async function createRecord(baseUrl: string, record: Record, oauth: OAuth) {
  const recordsApi = new RecordsApi(baseUrl);
  recordsApi.setDefaultAuthentication(oauth);
  const res = await recordsApi.createPublicUsingPOST(record);
  return res;
}

async function main() {
  const token = await fetchToken(clientSecret);
  const oauth = await createOAuth(token.access_token);

  const stepId = '7Ycf0hko'; // contacts

  const {baseUrl} = clientSecret;
  const workflowId = await fetchWorkflowId(baseUrl, stepId, oauth);
  console.log('workflowId: ', workflowId);

  const fields = await fetchWorkflowFields(baseUrl, workflowId, oauth);
  console.log('fields:', fields);

  const record: Record = buildRecord(fields, stepId);
  const res = await createRecord(baseUrl, record, oauth);
  console.log('record creation response: ', res);
}

main();
