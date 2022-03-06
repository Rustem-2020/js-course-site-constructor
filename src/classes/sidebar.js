import {block} from './../utils.js'
import {TitleBlock, TextBlock} from './blocks.js'

export class Sidebar {
    constructor(selector, updateCallback){
        this.el = document.querySelector(selector)
        this.update = updateCallback
        this.init()
        
        
    }
    init(){
        this.el.insertAdjacentHTML('afterbegin' , this.template)
        this.el.addEventListener('submit', this.add.bind(this))
        //console.log('This is ' + JSON.stringify(this))
    }
    get template(){
        return [block('title'),block('text')].join('')
        
    }
    add(event){
        event.preventDefault()        
        const type = event.target.name
        const value = event.target.value.value
        const style = event.target.styles.value
        //debugger
        let newBlock = (type ==='text') 
        ? new TextBlock(value,  {style})
        : new TitleBlock(value,  {style})
       
        //console.log(this)
        this.update(newBlock)
         event.target.value.value =''
         event.target.styles.value =''
       
    }
    
}
