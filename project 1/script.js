// Hardcoded data for the menu page
const menuItems = [
	{
		name: "Espresso",
		description: "A shot of rich, bold espresso."
	},
	{
		name: "Cappuccino",
		description: "Equal parts espresso, steamed milk, and frothed milk."
	},
	{
		name: "Latte",
		description: "A double shot of espresso with steamed milk and a small amount of frothed milk."
	}
];

// Inject the menu items into the HTML
const menuList = document.querySelector("#menu-list");

menuItems.forEach(item => {
	const li = document.createElement("li");
	li.innerHTML = `
		<h2>${item.name}</h2>
		<p>${item.description}</p>
	`;
	menuList.appendChild(li);
});