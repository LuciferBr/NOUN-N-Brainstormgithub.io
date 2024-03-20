// App.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Container = styled.div`
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
`;

const PostForm = styled.form`
    margin-bottom: 20px;
`;

const Textarea = styled.textarea`
    width: 100%;
    margin-bottom: 10px;
`;

const Button = styled.button`
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    cursor: pointer;
`;

const Post = styled.div`
    margin-bottom: 20px;
    padding: 10px;
    border: 1px solid #ccc;
`;

const App = () => {
    const [posts, setPosts] = useState([]);
    const [postContent, setPostContent] = useState('');

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        try {
            const response = await axios.get('/api/posts');
            setPosts(response.data.posts);
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    };

    const handlePostSubmit = async (event) => {
        event.preventDefault();
        if (postContent.trim() !== '') {
            try {
                await axios.post('/api/posts', { content: postContent });
                fetchPosts();
                setPostContent('');
            } catch (error) {
                console.error('Error creating post:', error);
            }
        } else {
            alert('Please enter something to post.');
        }
    };

    return (
        <Container>
            <h1>Amazing Social Media App</h1>
            <PostForm onSubmit={handlePostSubmit}>
                <Textarea
                    value={postContent}
                    onChange={(event) => setPostContent(event.target.value)}
                    placeholder="What's on your mind?"
                />
                <Button type="submit">Post</Button>
            </PostForm>
            {posts.map((post, index) => (
                <Post key={index}>
                    <p>{post.content}</p>
                </Post>
            ))}
        </Container>
    );
};

export default App;
