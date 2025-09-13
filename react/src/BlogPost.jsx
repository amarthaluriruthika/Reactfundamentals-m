function BlogPost(post){
    const authorStyle={
        fontStyle:"italic",
        fontSize:"20px",
        fontWeight:"bold",
        color:"blue"
    }
    const titleStyle={
        fontSize:"18px",
        fontWeight:"medium",
        color:"black"
    }
    
    return(
        <div>
            <p style={authorStyle}>Author:{post.author}</p>
            <p style={titleStyle}>Title:{post.title}</p>
            <p>Description:{post.description}</p>
        </div>
    )
}
    export default BlogPost