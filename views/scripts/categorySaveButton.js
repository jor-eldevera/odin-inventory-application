document.getElementById("save-button").addEventListener("click", async () => {
    const nameElement = document.getElementById("category-name");
    const updatedName = nameElement.textContent.trim(); // Get the updated name

    const descriptionElement = document.getElementById("category-description");
    const updatedDescription = descriptionElement.textContent.trim(); // Get the updated name

    const id = window.id; // Assuming category ID is passed from the backend

    try {
        const response = await fetch(`/categories/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id: id,
                name: updatedName,
                description: updatedDescription
            })
        });

        if (!response.ok) {
            alert("Failed to update category.");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("An error occurred while updating the category.");
    }
});