// Type Alias
export type Uid = number | string | undefined;
type Platform = 'Windows' | 'Linux' | 'MacOS';

function logProduct(uid: Uid, item: string) {
  console.log(`A product with ${uid} has a title as ${item}.`);
}

function logUser(uid: Uid, user: string) {
  console.log(`A product with ${uid} has a title as ${user}.`);
}

function logPlatform(platform: Platform) {
  return platform;
}

logProduct(123, 'cellphone');
logProduct('123', 'cellphone');

logUser(123, 'Luísa');
logUser('123', 'Luísa');

logPlatform('Linux');
