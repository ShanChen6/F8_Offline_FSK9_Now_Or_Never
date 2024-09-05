let page = 1;
const limit = 5;
const maxPosts = 100;
const postContainer = document.getElementById("post-container");
const loading = document.getElementById("loading");
let totalLoadedPosts = 0;

async function loadPosts() {
  if (totalLoadedPosts >= maxPosts) {
    loading.textContent = "No more posts to load";
    return;
  }

  loading.style.display = "block";

  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`
    );
    const data = await response.json();

    totalLoadedPosts += data.length;

    appendPostsInBatches(data);

    if (data.length === 0 || totalLoadedPosts >= maxPosts) {
      loading.textContent = "No more posts to load";
      window.removeEventListener("scroll", handleScroll); // Dừng lắng nghe sự kiện cuộn
    } else {
      page++;
    }
  } catch (error) {
    console.error("Error loading posts:", error);
  } finally {
    loading.style.display = "none";
  }
}

function appendPostsInBatches(posts, batchSize = 5) {
  let batchIndex = 0;

  function renderBatch() {
    const batch = posts.slice(batchIndex, batchIndex + batchSize);

    batch.forEach((post) => {
      const postElement = document.createElement("div");
      postElement.className = "post";
      postElement.innerHTML = `
                <h2>${post.title}</h2>
                <p>${post.body}</p>
            `;
      postContainer.appendChild(postElement);
    });

    batchIndex += batchSize;

    if (batchIndex < posts.length) {
      setTimeout(renderBatch, 100);
    }
  }

  renderBatch();
}

function handleScroll() {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
    loadPosts();
  }
}

window.addEventListener("scroll", handleScroll);

loadPosts();
