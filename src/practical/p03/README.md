# Subject 3 — Filter user by id

## API Endpoints

```
https://jsonplaceholder.typicode.com/users
```

## Function name

`filterUserById`

## Function interface

```tsx
filterUserById(id)
```

## Description

Fetch users from the API and return users object with `id`, `name`, `phone`, `address`.

## Example input

```tsx
filterUserById(1)
```

## Example output

```json
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
  }
}
```

## Edge Cases

### User not found
If user not found, return error message:

```json
"Invalid id"
```


## Global Rules

- Use **axios**
- Use **async / await**
- Use **try / catch**
- One function per subject
- Use at least one **array or object method**
- No `any`
- Function must **return value only** (no console.log)

