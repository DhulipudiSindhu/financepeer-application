import {Component} from 'react';

import Header from '../Header'
import PostList from '../PostList'

import './index.css'

class Posts extends Component {
    state = {postData: [{
        id: 0,
        userId: 0,
        title: 'FullStack Developer',
        body: "All i do is developing"
    }]}

    componentDidMount(){
        console.log(1)
        this.renderUserID();
    }

    renderUserID  = async () =>{
        const response = await fetch("http://localhost:3000/posts");
        let data = []
        if(response.ok === true){
            data =await response.json();
            const formatedData = data.map( item =>({
                id: item.id,
                userId: item.userId,
                title: item.title,
                body: item.body,
            }))
            console.log("formated:data:")
            console.log(formatedData)
            this.setState({postData: formatedData});
        }
    }

    render() {
        const {postData} = this.state;
        return (
            <>
                <Header />
                <div className="blog-list-container">
                    {postData.map(item => 
                    <PostList postData={item} key={item.id} />)}
                </div>
            </>
        )
    }
}

export default Posts
