let count = 0;
const counter = document.getElementById("counter");
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");
const likeBtn = document.getElementById("heart");
const commentForm = document.getElementById("comment-form");
const commentsList = document.getElementById("comments");


const timer = setInterval(() => {
    count++;
    counter.innerText = count;
  }, 1000);
  


  plusBtn.addEventListener("click", () => {
    count++;
    counter.innerText = count;
  });
  


minusBtn.addEventListener("click", () => {
  count--;
  counter.innerText = count;
});



likeBtn.addEventListener("click", () => {
    const likes = document.getElementById("likes");
    const like = document.createElement("li");
    like.innerText = `${count} has been liked!`;
    likes.appendChild(like);
  });
  

  commentForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const commentInput = document.getElementById("comment-input");
    const comment = document.createElement("li");
    comment.innerText = commentInput.value;
    commentsList.appendChild(comment);
    commentInput.value = "";
  });
