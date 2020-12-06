declare module 'dialogbox-vue' {
    import { PluginFunction } from "vue"
    export const install: PluginFunction<{}>
}

import Vue from 'vue'

type DIALOG_CANCEL = 0
type DIALOG_OK = 1
type DIALOG_YES = 2
type DIALOG_NO = 3

type ButtonType = 'ok' | 'cancel' | 'yes' | 'no'
type DialogResult = DIALOG_OK | DIALOG_CANCEL | DIALOG_YES | DIALOG_NO

export interface DialogOptions {
    ok?: boolean
    cancel?: boolean
    no?: boolean
    yes?: boolean
    defButton?: ButtonType
    text?: string
    slideLeft?: boolean
    slideRight?: boolean
    textInput?: false
    textInputValue?: string
}

export const showDialog: (dialogRef: Vue, dialogOptions: DialogOptions)=>Promise<DialogResult>

