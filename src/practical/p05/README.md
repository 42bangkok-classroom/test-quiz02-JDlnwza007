# Subject 5 — Safe Fetch User

## API Endpoint

```
https://jsonplaceholder.typicode.com/users
```

## Function name

`safeFetchUser`

## Function interface

```tsx
safeFetchUser(userId)
```

## Description

Fetch all users and find the one with matching `userId`.

Rules:
-   If `axios` request fails (network error, 500, 404 from server, etc) or response data is null, return `null`.
-   If user is not found in the list, return `null`.
-   If successful, return an object with `id`, `name`, `phone`, `address`.

## Example input

```tsx
safeFetchUser(1)
```

## Example output

```json
{
  "id": 1,
  "name": "Leanne Graham",
  "address": {
    "street": "Kulas Light",
    "suite": "Apt. 556",
    "city": "Gwenborough",
    "zipcode": "92998-3874",
    "geo": {
      "lat": "-37.3159",
      "lng": "81.1496"
    }
  },
  "phone": "1-770-736-8031 x56442"
}
```

## Example input (Not Found)

```tsx
safeFetchUser(9999)
```

## Example output (Not Found)

```ts
null
```

## Edge Cases

### Invalid userId values

Return null for invalid or non-existent user IDs:

```tsx
safeFetchUser(0)      // returns null
safeFetchUser(-1)    // returns null
safeFetchUser(9999)  // returns null
```

### User with empty address

If the user exists but has an empty address, return it with `address: null`:

```tsx
safeFetchUser(1)
```

```json
{
  "id": 1,
  "name": "Leanne Graham",
  "address": null,
  "phone": "1-770-736-8031 x56442"
}
```

## Global Rules

- Use **axios**
- Use **async / await**
- Use **try / catch**
- One function per subject
- Use at least one **array or object method**
- No `any`
- Function must **return value only** (no console.log)

