import { PetsApi, Configuration } from 'petstore';

try {
  const configuration = new Configuration({accessToken: '1234'});
  const petsApi = new PetsApi(configuration);

  const result = await petsApi.listPets();
  
  if(result?.length) {
    console.log('Hello ' + result[0].name);
  }
  
} catch(error) {
  console.log(error);
}
