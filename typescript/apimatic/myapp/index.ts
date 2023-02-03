import { ApiError, Client, PetsController } from 'petstorelib';

const client = new Client({
  timeout: 0,
  accessToken: '1234',
});
const petsController = new PetsController(client);
const limit = 10;
try {
  const { result, ...httpResponse } = await petsController.listPets(limit);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
  if(result?.length) {  
    console.log('Hello ' + result[0].name);
  }
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}