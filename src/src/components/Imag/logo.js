import React, { useState } from 'react';

const Logo = () => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <h2>Upload an Image</h2>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
      />
      {image && (
        <div>
          <h3>Preview:</h3>
          <img src={image} alt="Uploaded" style={{ maxWidth: '100%', maxHeight: '200px' }} />
        </div>
      )}
    </div>
  );
};

export default Logo;
