import { useAuth0 } from '@auth0/auth0-react';

const CreatePost = () => {
  const { getAccessTokenWithPopup } = useAuth0();

  const onCreatePost = async () => {
    try {
      const token = await getAccessTokenWithPopup({
        audience: `http://localhost:5000/api`,
        scope: 'create:post',
      });

      console.log(token);

      const response = await fetch('/api/blog/post', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: 'string',
          description: 'string',
          body: 'string',
          author: 'string',
          date_posted: 'string',
        }),
      });

      console.log(await response.json());
    } catch (e) {
      console.error(e);
    }
  };

  return <button onClick={onCreatePost}>Create Post</button>;
};

export default CreatePost;

