import {UsersApi} from './logicgate-api/UsersApi';
import {baseUrl} from './devAccount';
import {createOAuth} from './createOAuth';

async function main() {
  const oauth = await createOAuth();

  const usersApi = new UsersApi(baseUrl);
  usersApi.setDefaultAuthentication(oauth);

  const users = await usersApi.findAllUsingGET3();

  // [Active {
  //     active: undefined,
  //     convertibleTo: undefined,
  //     created: undefined,
  //     currentValues: undefined,
  //     discrete: undefined,
  //     fieldType: undefined,
  //     global: undefined,
  //     id: 'ewsF3HJv',
  //     label: undefined,
  //     labels: undefined,
  //     name: 'LogicGate Administrator',
  //     operators: undefined,
  //     tooltip: undefined,
  //     updated: undefined,
  //     valueType: undefined,
  //     workflow: undefined,
  //     workflowId: undefined,
  //     archived: undefined,
  //     assignments: [],
  //     company: 'LogicGate',
  //     _default: false,
  //     disabled: false,
  //     discriminator: undefined,
  //     email: 'company@logicgate.com',
  //     empty: false,
  //     field: undefined,
  //     fieldId: undefined,
  //     first: undefined,
  //     hasValue: undefined,
  //     imageUrl:
  //      'https://some/v.png',
  //     intercomHash: undefined,
  //     isDefault: undefined,
  //     languageTag: undefined,
  //     last: undefined,
  //     lastLogin: null,
  //     locked: false,
  //     loginAttempts: undefined,
  //     numericValue: undefined,
  //     password: undefined,
  //     priority: undefined,
  //     records: undefined,
  //     resetPasswordToken: undefined,
  //     roles: undefined,
  //     sendEmail: undefined,
  //     status: 'Active',
  //     superUser: true,
  //     textValue: undefined,
  //     tier: 'PRIMARY',
  //     timeZone: undefined
  //   },
  //   ...
  // ]
  console.log(users.body);
}

main();
