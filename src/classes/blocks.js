import {col, row, css} from './../utils'

class Block {
    constructor(  value, options){              
        this.value = value
        this.options = options
    }
    toHTML(){
        throw new Error('Метод toHTML должен быть')
    }
    
}

export class TitleBlock extends Block{
    constructor(value,options){
        super( value, options)
    }
    toHTML(){        
        const {tag='h1', style} = this.options
        return row(col(`<${tag}>${this.value}</${tag}>`), css(style))
    }
}
export class TextBlock extends Block{
    constructor(value,options){
        super( value, options)
    }
    toHTML(){
        const {tag ='p', style} = this.options
        return row(col(`<${tag}>${this.value}</${tag}>`), css(style))
    }
}
export class ImageBlock extends Block{
    constructor(value,options){
        super( value, options)
    }
    toHTML(){
        const { alt, style} =  this.options      
        return row(`<img title="${alt}" alt="${alt}" src="${this.value}"/>`, css(style))
    }
}
export class ColumnsBlock extends Block{
    constructor(value,options){
        super( value, options)
    }
    toHTML(){
        const {tag, style} = this.options     
        const htm = this.value.map(item => col(`<${tag}>${item}</${tag}>`, css(style)))
        return row(`${htm.join('')}`)
    }
}