<template>
    <input v-selectall ref=input v-model="content" @input="handleInput">
</template>
    
<script>
export default {
    props: {
        value: String
    },
    data() {
        return {
            content: this.value
        }
    },
    directives: {    
        selectall: {
            inserted: function(el) {
                el.addEventListener("focus", () => setTimeout(() => el.select()))
            }            
        }
    },
    methods: {
        handleInput() {
            this.$emit('input', this.content)
        },        
        getFocusables() { return [ this.$refs.input ] },
        getFocusIndex(buttonCount) { return buttonCount }, 
        getDefaultButton(defBtn) { return defBtn }
    }
}
</script>

<style scoped>
input {
    background-color: var(--dialog-main-background-color);
    color: var(--dialog-main-color);
    border-color: gray;
    border-style: solid;
    border-width: 1px;
}
input:focus {
    outline-color: var(--dialog-button-active-color);
    border-color: transparent;
    outline-width: 1px;
    outline-style: solid;
}
input::selection {
    color: white;
    background-color: var(--dialog-button-color);
}
</style>