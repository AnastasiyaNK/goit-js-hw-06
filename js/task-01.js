const categoriesRef = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoriesRef.length}`);


categoriesRef.forEach(li => {
    const titleEl = li.querySelector("h2");
    console.log(`Category: ${titleEl.textContent}`)

    const liEl = li.querySelectorAll("li");
    console.log(`Elements: ${liEl.length}`)
})




