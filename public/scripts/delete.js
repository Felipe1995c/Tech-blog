
const deleteurl = window.location.pathname;
const deleteid = deleteurl.substring(deleteurl.lastIndexOf('/') + 1);
console.log('delete id: ' + deleteid);

const deleteArticle = async (event) => {
    event.preventDefault();

    if (deleteid) { 
        const response = await fetch(`/api/articles/${deleteid}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                title, content
            })
        });

        if (response.ok) {
            document.location.replace("/");
        } else {
            alert("Failed to delete!");
        }
    }
};

document.querySelector('.deleteBtn').addEventListener('click', deleteArticle);