const blogContainer = document.getElementById("blogs-container");
const blogTitle = document.getElementById("blog-title");
const blogContent = document.getElementById("blog-content");
const submitBtn = document.getElementById("submitBtn");
const submitForm = document.getElementById("submit-form");

submitBtn.addEventListener("click", updateDB);

const database = firebase.database().ref();
// const revealBtn = document.getElementsByClassName("revealBtn");

function updateDB(event){
    event.preventDefault();
    const data={
        TITLE: blogTitle.value,
        CONTENT: blogContent.value
    }
    console.log(data);
database.push(data);
blogTitle.value = "";
blogContent.value = "";
}
database.on("child_added", addMessageToBoard);

function addMessageToBoard(snapshot){
    const data = snapshot.val();
    console.log(data);
    const singleMessage = makeSingleMessageHTML(data.TITLE, data.CONTENT);
    blogContainer.append(singleMessage);
}
function makeSingleMessageHTML(titleTxt, contentTxt){
    let parentDiv = document.createElement("div");
    // parentDiv.classList.add("single-message");

    let titleP = document.createElement("p");
    // titleP.classList.add("single-message-username");
    titleP.innerHTML = titleTxt + ":";
    parentDiv.append(titleP);

    let contentP = document.createElement("p");
    contentP.innerHTML = contentTxt;
    parentDiv.append(contentP);

    return parentDiv;
}
// revealBtn[0].addEventListener("click", updateDB);
// console.log(data.TITLE);