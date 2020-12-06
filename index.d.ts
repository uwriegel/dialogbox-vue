declare module 'dialogbox-vue' {
    import { PluginFunction } from "vue"
    export const install: PluginFunction<{}>
}

import Vue from 'vue'

type DIALOG_CANCEL_TYPE = 0
type DIALOG_OK_TYPE = 1
type DIALOG_YES_TYPE = 2
type DIALOG_NO_TYPE = 3

export const DIALOG_CANCEL = 0
export const DIALOG_OK = 1
export const DIALOG_YES = 2
export const DIALOG_NO = 3

type ButtonType = 'ok' | 'cancel' | 'yes' | 'no'
type DialogResult = DIALOG_OK_TYPE | DIALOG_CANCEL_TYPE | DIALOG_YES_TYPE | DIALOG_NO_TYPE

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

