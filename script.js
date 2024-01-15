document.addEventListener("DOMContentLoaded", function () {
  const infiList = document.getElementById("infi-list");

  // Add about 10 list items by default
  for (let i = 1; i <= 10; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = `Item ${i}`;
    infiList.appendChild(listItem);
  }

  // Function to add more list items when the user reaches the end
  function addMoreItems() {
    for (let i = 1; i <= 2; i++) {
      const listItem = document.createElement("li");
      listItem.textContent = `Item ${infiList.children.length + i}`;
      infiList.appendChild(listItem);
    }
  }

  // Detect when the user reaches the end of the list
  infiList.addEventListener("scroll", function () {
    const scrollPosition = infiList.scrollTop + infiList.clientHeight;
    const totalHeight = infiList.scrollHeight;

    if (scrollPosition === totalHeight) {
      // User has reached the end of the list, add more items
      addMoreItems();
    }
  });
});
