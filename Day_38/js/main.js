let page = 1;
const postContainer = document.getElementById("post-container");
const loading = document.getElementById("loading");
const limit = 5;

async function loadPosts() {
  loading.style.display = "block";

  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`
    );
    const data = await response.json();

    data.forEach((post) => {
      const postElement = document.createElement("div");
      postElement.className = "post";
      postElement.innerHTML = `
                <h2>${post.title}</h2>
                <p>${post.body}</p>
            `;
      postContainer.appendChild(postElement);
    });

    if (data.length > 0) {
      page++;
    } else {
      loading.textContent = "No more posts to load";
    }
  } catch (error) {
    console.error("Error loading posts:", error);
  } finally {
    loading.style.display = "none";
  }
}

window.addEventListener("scroll", () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
    loadPosts();
  }
});

loadPosts();
