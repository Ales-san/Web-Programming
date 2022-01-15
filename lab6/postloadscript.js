async function loadPosts() {
    const preloader = document.getElementById("posts__preloader");

    let block = document.getElementById("posts");

    if (preloader.style.display === "none") {
        let postItems = block.querySelectorAll("div");
        postItems.forEach(item => {
            if (item.classList.contains("posts__item") || item.classList.contains("posts__error")) {
                block.removeChild(item);
            }
        })
        preloader.style.display = "inline";
    }

    setTimeout( async () => {
        try {
            let filter = ((new Date()).getHours() * (new Date()).getMinutes()) % 100 + 1;
            let data = await fetch(`https://jsonplaceholder.typicode.com/posts/${filter}/comments`)
            let posts = await data.json();
            let templateContent = document.getElementById("posts__template").content;
            posts.forEach(post => {
                const postElement = document.createElement("div");
                postElement.classList.add("posts__item");
                let postContent = templateContent.cloneNode(true);
                let postContentParts = postContent.querySelectorAll("div");
                postContentParts[0].textContent += post.name;
                postContentParts[1].textContent += post.email;
                postContentParts[2].textContent += post.body;
                postElement.appendChild(postContent);
                block.appendChild(postElement);
            })
        } catch (err) {
            const message = document.createElement("p");
            message.classList.add("posts__error");
            message.innerText = "Ошибка загрузки данных";
            block.appendChild(message);
        } finally {
            preloader.style.display = "none";
        }
    }, 1000);
}

window.addEventListener('DOMContentLoaded', loadPosts);