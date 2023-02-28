<script>
export default {
    data() {
        return {
            movies: [],
            newTitle: "",
            adding: false,
        }
    },
    methods: {
        addMovie(){
            this.movies.push({
                id: this.movies.length + 1,
                title: this.newTitle,
            })
            this.newTitle =''
        },
        showInputToAdd(state){
            this.adding = state
            this.newTitle =''
        },
    },
}
</script>

<template>
    <div>
        <h3>Directives v-if and v-else</h3>
        <label class="m-3">Testing directive v-if and v-else</label>    
        <button
            v-if="adding == false"
            v-on:click="showInputToAdd(true)">
            Add Movie 
        </button>
        <button
            v-else
            v-on:click="showInputToAdd(false)">
            Cancel 
        </button>
        <div v-if="adding">
            <input 
                id="add-movie-input"
                @keyup.enter="addMovie()" 
                v-model="newTitle"
                placeholder="Add a movie"
            />
            <button v-on:click="addMovie()" class="btn btn-primary">+</button>
        </div>
        <span v-if="movies.length ==0" class="m-3">Please add movie</span>
        <ul class="m-3">
            <template v-for="(movie, key) in movies" :key="movie.id">
                <li :id="key">{{ movie.id }}: {{ movie.title }}</li>
            </template>
        </ul>
    </div>
</template>

<style>

</style>