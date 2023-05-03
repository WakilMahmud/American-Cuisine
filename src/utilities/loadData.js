const loadData = async (id) => {
	const loadedAllChef = await fetch("https://chef-server-wakilmahmud.vercel.app/");
	const allChef = await loadedAllChef.json();

	const loadedChefRecipes = await fetch(`https://chef-server-wakilmahmud.vercel.app/recipes/${id}`);
	const chefRecipes = await loadedChefRecipes.json();

	return { allChef, chefRecipes };
};

export default loadData;
