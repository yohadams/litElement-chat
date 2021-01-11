export async function login(username) {
    const response = await fetch(`http://localhost:8001/api/login`, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({username})
    });
    return response.json();
}