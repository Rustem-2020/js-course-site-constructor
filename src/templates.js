import {col, row, css} from './utils'

function title(block){    
    const {tag='h1', style} = block.options
    return row(col(`<${tag}>${block.value}</${tag}>`), css(style))
    
}
 function text(block){    
    const {tag ='p', style} = block.options
    return row(col(`<${tag}>${block.value}</${tag}>`), css(style))
}
 function columns(block){     
    const {tag, style} = block.options     
    const htm = block.value.map(item => col(`<${tag}>${item}</${tag}>`, css(style)))
    return row(`${htm.join('')}`)

}
 function image (block){
    const { alt, style} =  block.options      
    return row(`<img title="${alt}" alt="${alt}" src="${block.value}"/>`, css(style))
}

export const templates = {
    title,
    text,
    image,
    columns
}
