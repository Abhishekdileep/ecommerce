import React , {Component} from 'react';
import MenuItem from '../menu-item/menu-item.component'
import '../directory/directory.style.scss'
class DirectoryMenu extends Component{
    constructor(props){
        super(props)
        this.state = {
            section: [
                {
                    title: 'hats',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    id: 1,
                    linkUrl: 'hats'
                },
                {
                    title: 'jackets',
                    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    id: 2,
                    linkUrl: ''
                },
                {
                    title: 'Hijabs',
                    imageUrl: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fnewsimg.bbc.co.uk%2Fmedia%2Fimages%2F46907000%2Fjpg%2F_46907347_hairy.jpg&f=1&nofb=1',
                    id: 3,
                    linkUrl: ''
                },
                {
                    title: 'womens',
                    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                    size: 'large',
                    id: 4,
                    linkUrl: ''
                },
                {
                    title: 'mens',
                    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    size: 'large',
                    id: 5,
                    linkUrl: ''
                }
            ]

        }
    }
    render(){
        return (<div className='directory-menu'>
            {
                 this.state.section.map(({id , title , imageUrl ,linkUrl , size}) =>{
                   return   ( <MenuItem title = {title} imageUrl = {imageUrl} linkUrl = {linkUrl}  key = {id} size={size} />)
                 })
            }
        </div> )
    }
}

export default DirectoryMenu;