declare module 'dialogbox-vue' {
    import { PluginFunction } from "vue"
    export const install: PluginFunction<{}>
}

import Vue from 'vue'

export interface DialogOptions {
    ok?: boolean
    cancel?: boolean
    no?: boolean
    yes?: boolean
    defButton?: string
    text?: string
    slideLeft?: boolean
    slideRight?: boolean
    textInput?: false
    textInputValue?: string
}

export const showDialog: (dialogRef: Vue, dialogOptions: DialogOptions)=>Promise<number>

