<template>
    <input ref=input>
</template>
    
<script>
export default {
    methods: {
        getFocusables() { return [ this.$refs.input ] },
        getFocusIndex(buttonCount) { return buttonCount }, 
        getDefaultButton(defBtn) { return defBtn }
    }
}
</script>

<style>
input {
    background-color: white;
    color: black;
    border-color: gray;
    border-width: 1px;
}
input:focus {
    outline-color: blue;
    border-color: transparent;
    outline-width: 1px;
    outline-style: solid;
}
</style>