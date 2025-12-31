const API_URL = process.env.REACT_APP_API_URL;

export async function getCategories() {
    try {
        const response = await fetch(`${API_URL}/categories`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Erreur getCategories:", error);
        return [];
    }
}

export async function getTopArtisans() {
    try {
        const response = await fetch(`${API_URL}/artisans/top`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Erreur getTopArtisans:", error);
        return [];
    }
}

export async function getArtisansByCategorie(id) {
    try {
        const response = await fetch(`${API_URL}/artisans/categorie/${id}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Erreur getArtisansByCategorie:", error);
        return [];
    }
}

export async function getOneArtisan(id) {
    try {
        const response = await fetch(`${API_URL}/artisans/${id}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Erreur getOneArtisan:", error);
        return null;
    }
}

export async function searchArtisans(term) {
    try {
        const response = await fetch(`${API_URL}/artisans/search?nom=${term}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Erreur searchArtisans:", error);
        return [];
    }
}