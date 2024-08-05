import Head from 'next/head';
import PostForm from '../components/PostForm';
import { useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [ogImageUrl, setOgImageUrl] = useState('');

  const handlePostSubmit = async (postData) => {
    console.log('Post Submitted:', postData);

    try {
      const formData = new FormData();
      formData.append('title', postData.title);
      formData.append('content', postData.content);
      if (postData.image) {
        formData.append('image', postData.image);
      }

      const response = await axios.post('/api/generate-og-image', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('OG Image Generated:', response.data.imageUrl);
      setOgImageUrl(response.data.imageUrl);
    } catch (error) {
      console.error('Error generating OG image:', error);
    }
  };

  return (
    <div>
      <Head>
        <title>Create a Post</title>
        <meta name="description" content="Create a post with dynamic OG image generation" />
        {ogImageUrl && <meta property="og:image" content={ogImageUrl} />}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-4xl font-bold">Create a New Post</h1>
        <PostForm onSubmit={handlePostSubmit} />
        {ogImageUrl && (
          <div className="mt-4">
            <h2 className="text-2xl font-bold">Generated OG Image:</h2>
            <img src={ogImageUrl} alt="Generated OG" className="mt-2 rounded shadow" />
          </div>
        )}
      </main>
    </div>
  );
}
