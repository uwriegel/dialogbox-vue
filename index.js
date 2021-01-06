import DialogBox from "./DialogBox.vue"

export default {
    install(Vue, options) {
        // Let's register our component globally
        // https://vuejs.org/v2/guide/components-registration.html
        Vue.component("vue-dialog-box", DialogBox)
    }
}

export async function showDialog(dialogRef, dialogOptions) {
    return await dialogRef.show(dialogOptions)
}

export const DIALOG_CANCEL = 0
export const DIALOG_OK = 1
export const DIALOG_YES = 2
export const DIALOG_NO = 3