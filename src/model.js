import ImageUrl from './assets/land.jpg'
import {TitleBlock, TextBlock, ColumnsBlock, ImageBlock} from './classes/blocks.js'
export const model = [

    new TitleBlock('JS website constructor', {
        tag: 'h2',        
        style:{
            background:'#4eaad0',
            'border-bottom': '6px solid #0280a6',
            color:'white',
            padding:'30px 50px',
            'text-align': 'center',
        }
    }),
    new TextBlock('We go JS courses to learn up to Middle',  {
        tag: 'h2',
        style:{
            border: '3px solid red',
            'letter-spacing' : '5px',
            background: 'yellow'
        }
    }),
    new ColumnsBlock( [
        'It is a big question for you if you manage to become a frontend developer',
        'Russian javascript is kotlen',
        'Today is Monday 22 April',
        'Nobody cares you'
    ],{
        tag: 'p',
        style: {
            border: '1px solid grey',
            padding: '20px 30px'
        }
     }),
    new ImageBlock ( ImageUrl, {
        alt: 'My picture', 
        style:{
            border: '4px solid grey',
            padding: '10px',
            background: 'black'
        }
    })
    
]