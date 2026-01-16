# Subject 4 — Get Todos By Id

## API Endpoint

```
https://jsonplaceholder.typicode.com/todos
https://jsonplaceholder.typicode.com/users
```

## Function name

`getTodosByUserId`

## Function interface

```tsx
getTodosByUserId(id)
```

## Description

Fetch todos and return todos array with user data from given id.

## Example output

```json
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
	todos: [
		{
    		userId: 1,
			id: 1,
			title: "delectus aut autem",
			completed: false
		},
		...
	]
}
```

## Edge Cases

### Empty todos array
If the todos array is empty, return an empty array:

```json
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
	todos: []
}
```

### Invalid id
If a id has not found, return error message:

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

