document.getElementById("delete-button").addEventListener("click", async () => {
    try {
        console.log(id);
        
        const response = await fetch(`/categories/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            }
        });

        console.log('Response status:', response.status);
        console.log('Response ok:', response.ok);

        if (!response.ok) {
            alert("Failed to delete category.");
        } else {
            window.location.href = "/categories";  // Redirect after successful deletion
        }
    } catch (error) {
        console.error("Error:", error);
        alert("An error occurred while deleting the category.");
    }
});