export const createPostOrUpdateRequest = async (id, title, body) => {

    const url = id ? `https://jsonplaceholder.typicode.com/posts/${id}` : 'https://jsonplaceholder.typicode.com/posts'
    const request = await fetch(url, {
        method: id ? 'PUT' : 'POST',
        body: JSON.stringify({
            ...(id && {id}),
            title,
            body,
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    return await request.json();
}

export const listTop10Posts = async () => {
    const request = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await request.json();

    return posts.filter((post) => post.id <= 10);
}

export const deletePost = async (id) => {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'DELETE',
    });
}