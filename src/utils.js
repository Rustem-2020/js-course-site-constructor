export function row(content, style=''){
    return `<div class="row" style="${style}">${content}</div>`
}

export function col(content, style=''){
    return `<div class="col-sm" style="${style}">${content}</div>`
}
export function css( style = {}){
    if (typeof style === 'string') return style
    const keys = Object.keys(style)    
    const array = keys.map( key => `${key}: ${style[key]}`)
    const stringFromArray = array.join(';')
    //console.log(stringFromArray)
    return stringFromArray 
    
}
export function block(type){
    return `
        <form name="${type}">
            <h5>${type}</h5>
            <div class="form-group">
                <input class="form-control form-control-sm" name="value" placeholder="value">
            </div>
            <div class="form-group">
                <input class="form-control form-control-sm" name="styles" placeholder="styles">
            </div>
            <button type="submit" class="btn btn-primary btn-sm">Добавить</button>
        </form>
        <hr />
    `
}