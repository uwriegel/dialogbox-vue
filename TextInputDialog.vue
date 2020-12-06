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
</style>