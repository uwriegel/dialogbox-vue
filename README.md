# dialogbox-vue
Opening a dialogbox with customized content and many choosable dialog buttons

## Dialog without content
Displaying a simple Dialog containing only text and buttons

## Dialog with extended content
Displaying a simple Dialog containing text, additional content and buttons

"additional content" is a Vue Component containig the additional content. 
The following methods must be implemented:
* getFocusables()
* getFocusIndex(buttonCount)
* getDefaultButton(this.defButton)

