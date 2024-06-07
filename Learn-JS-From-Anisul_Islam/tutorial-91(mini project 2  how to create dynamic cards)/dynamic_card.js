const posts_data = [
    {
        title :"title-01",
        body : "body-01"
    },
    {
        title :"title-02",
        body : "body-02"
    },
    {
        title :"title-03",
        body : "body-03"
    },
    {
        title :"title-04",
        body : "body-04"
    },
    {
        title :"title-05",
        body : "body-05"
    },
    {
        title :"title-01",
        body : "body-01"
    },
    {
        title :"title-02",
        body : "body-02"
    },
    {
        title :"title-03",
        body : "body-03"
    },
    {
        title :"title-04",
        body : "body-04"
    },
    {
        title :"title-05",
        body : "body-05"
    },
    {
        title :"title-04",
        body : "body-04"
    },
    {
        title :"title-05",
        body : "body-05"
    }
];

/* <div class="post">
<h4 class="post-title">Post Title</h4>
<p class="post-body">
    Post Description
</p>
</div> */

const postElements = document.querySelector(".posts");

const load_data = () => {
    posts_data.map((posts_data) => {
        const postElement = document.createElement("div");
        postElement.classList.add("post");
        postElement.innerHTML = `
                    <h4 class="post-title">${posts_data.title}</h4>
                        <p class="post-body">
                            ${posts_data.body}
                        </p>`;
        postElements.appendChild(postElement);
    })
}
load_data();


