# Subject 1 — Fetch Users

## API Endpoint

```
https://jsonplaceholder.typicode.com/users
```

## Function name

`getPostalAddress`

## Function interface

```tsx
getPostalAddress()
```

## Description

Fetch users from the API and return all users as an array.

Return only return `id`, `name`, `phone`, `address`

## Example output

```json
[
  { 
    id: 1,
    name: "Leanne Graham",
    phone: "1-770-736-8031 x56442",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496"
      }
    },
  },
  {
    id: 2,
    name: "Ervin Howell",
    phone: "010-692-6593 x09125",
    address: {
      street: "Victor Plains",
      suite: "Suite 879",
      city: "Wisokyburgh",
      zipcode: "90566-7771",
      geo: {
        lat: "-43.9509",
        lng: "-34.4618"
      }
    },
  }
]
```

## Edge Cases

### Empty data
If there is empty data, return empty array:

```json
[]
```

### Address missing
If there is address missing, return data with address as null:

```json
[
  {
    id: 1,
    name: "Leanne Graham",
    phone: "1-770-736-8031 x56442",
    address: null
  },
  {
    id: 2,
    name: "Ervin Howell",
    phone: "010-692-6593 x09125",
    address: null
  }
]
```

## Global Rules

- Use **axios**
- Use **async / await**
- Use **try / catch**
- One function per subject
- Use at least one **array or object method**
- No `any`
- Function must **return value only** (no console.log)

