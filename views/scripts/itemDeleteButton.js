document.getElementById("delete-button").addEventListener("click", async (e) => {
    const itemName = document.getElementById("item-name").textContent;
    const categoryId = e.target.dataset.categoryId; // Get the category ID from the button
    const confirmed = confirm(`Are you sure you want to delete "${itemName}"?`);
    
    if (!confirmed) {
        return;
    }

    try {
        const response = await fetch(`/items/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            }
        });

        if (!response.ok) {
            alert("Failed to delete item.");
        } else {
            window.location.href = `/categories/${categoryId}`;  // Redirect to specific category
        }
    } catch (error) {
        console.error("Error:", error);
        alert("An error occurred while deleting the item.");
    }
});