# Pets

```ts
const petsController = new PetsController(client);
```

## Class Name

`PetsController`

## Methods

* [List Pets](../../doc/controllers/pets.md#list-pets)
* [Create Pets](../../doc/controllers/pets.md#create-pets)
* [Show Pet by Id](../../doc/controllers/pets.md#show-pet-by-id)


# List Pets

List all pets

```ts
async listPets(
  limit?: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Pet[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `limit` | `number \| undefined` | Query, Optional | How many items to return at one time (max 100)<br>**Constraints**: `<= 100` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Pet[]`](../../doc/models/pet.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await petsController.listPets();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| Default | unexpected error | [`CustomError`](../../doc/models/custom-error.md) |


# Create Pets

Create a pet

```ts
async createPets(
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await petsController.createPets();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| Default | unexpected error | [`CustomError`](../../doc/models/custom-error.md) |


# Show Pet by Id

Info for a specific pet

```ts
async showPetById(
  petId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Pet>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `petId` | `string` | Template, Required | The id of the pet to retrieve |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Pet`](../../doc/models/pet.md)

## Example Usage

```ts
const petId = 'petId0';
try {
  const { result, ...httpResponse } = await petsController.showPetById(petId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| Default | unexpected error | [`CustomError`](../../doc/models/custom-error.md) |

