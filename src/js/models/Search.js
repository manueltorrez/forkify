import axios from 'axios';

export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResult() {
        const proxy = 'https://cors-anywhere.herokuapp.com/';
        const key = 'f1863630e56dfed8f801b7fb82562b3a';
    
        try {
            const res = await axios(`${proxy}https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
            this.result = res.data.recipes;
            //console.log(this.result);
        } catch (error) {
            alert(error);
        }
    }
    
}
