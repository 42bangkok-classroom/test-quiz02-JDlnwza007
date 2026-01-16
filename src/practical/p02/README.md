# Subject 2 — Add new user

## API Endpoint

```
https://jsonplaceholder.typicode.com/users
```

## Function name

`addUser`

## Function interface

```tsx
addUser(newUserData)
```

## Description

Fetch users and add new user.

Note: The id of the new user is the last user's id + 1.
Note2: The new user will be object only not array.
Note3: If any field is missing make that field value null.
Return only `id`, `name`, `phone`, `address`.

## Example input

```tsx
addUser({
  name: "John Doe",
  phone: "1234567890",
  username: "johndoe",
  email: "johndoe@example.com",
  address: {
    street: "123 Main St",
    suite: "Apt 1",
    city: "Anytown",
    zipcode: "12345",
    geo: {
      lat: "-37.3159",
      lng: "81.1496"
    }
  },
  website: "https://johndoe.com",
  company: {
    name: "John Doe Company",
    catchPhrase: "John Doe Company",
    bs: "John Doe Company"
  }
});
```

## Example output

```json
[
  {
    id: 1,
    name: "Leanne Graham",
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
    phone: "1-770-736-8031 x56442",
  },
  {
    id: 2,
    name: "Ervin Howell",
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
    phone: "010-692-6593 x09125",
  },
  .
  .
  .
  {
    id: 11,
    name: "John Doe",
    address: {
      street: "123 Main St",
      suite: "Apt 1",
      city: "Anytown",
      zipcode: "12345",
      geo: {
        lat: "-37.3159",
        lng: "81.1496"
      }
    },
    phone: "1234567890"
  }
]
```

## Edge Cases

### Null new user
If new user is null, return all users without adding new user:

```tsx
addUser(null);
```

```json
[
  {
    id: 1,
    name: "Leanne Graham",
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
    phone: "1-770-736-8031 x56442",
  },
  {
    id: 2,
    name: "Ervin Howell",
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
    phone: "010-692-6593 x09125",
  },
  .
  .
  .
  {
    id: 10,
    name: "Clementina DuBuque",
    address: {
      street: "Kattie Turnpike",
      suite: "Suite 198",
      city: "Lebsackbury",
      zipcode: "31428-2261",
      geo: {
        lat: "-38.2386",
        lng: "57.2232"
      }
    },
    phone: "024-648-3804",
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

