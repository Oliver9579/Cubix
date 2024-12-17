import {createPostOrUpdateRequest, deletePost, listTop10Posts} from "./postsService.js";

export const initPosts = () => {
    document.getElementById("send-button").addEventListener("click", () => createPost());
    showPosts();
}

const createPost = async () => {
    const titleEl = document.getElementById("new-post-title");
    const bodyEl = document.getElementById("new-post-body");
    const idEl = document.getElementById("num-input");

    const newPost = await createPostOrUpdateRequest(idEl.value, titleEl.value, bodyEl.value);

    const postTitleEl = document.getElementById("post-title")
    const postBodyEl = document.getElementById("post-body")

    postTitleEl.innerHTML = newPost.title
    postBodyEl.innerHTML = newPost.body
};

const showPosts = async () => {
    const postsEl = document.getElementById("posts");

    const posts = await listTop10Posts();

    posts.forEach((post) => postsEl.innerHTML += ` 
    <div>
        <span>${post.id}. ${post.title}</span>
        <button id="delete-${post.id}">Delete</button>

    </div>`
    );

    posts.forEach((post) => {
        document.getElementById(`delete-${post.id}`).addEventListener('click', async (e) => {
            await deletePost(post.id)

            const parentEl = e.target.parentElement;
            parentEl.remove();
        })
    })
}