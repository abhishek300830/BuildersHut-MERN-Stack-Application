import React, { useState } from "react";
import AvatarEditor from "react-avatar-editor";
import ImageBuilderContainer from "./imageBuilderStyle";
import Dropzone from "react-dropzone";
const ImageBuilder = () => {
  // dropzone state
  const [image, setImage] = useState({
    link: "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png",
  });
  // handle drop Image
  const handleDropImage = (dropped) => {
    setImage({ link: dropped[0] });
  };
  return (
    <ImageBuilderContainer>
      <div className="left">
        {/* dropzone */}
        <Dropzone
          onDrop={handleDropImage}
          noClick
          noKeyboard
          style={{ width: "250px", height: "250px" }}
        >
          {({ getRootProps, getInputProps }) => (
            <div {...getRootProps()}>
              {/* <AvatarEditor width={250} height={250} image={image.link} /> */}
              <AvatarEditor
                image={image.link}
                width={400}
                height={400}
                border={50}
                borderRadius={10}
                // color={[255, 255, 255, 0.6]} // RGBA
                color={[0, 0, 0, 0.4]} // RGBA
                scale={1.2}
                rotate={0}
              />
              <input {...getInputProps()} />
            </div>
          )}
        </Dropzone>
      </div>
      <div className="right">
        <h1>Image Editor</h1>
        <div className="editorContainer"></div>
      </div>
    </ImageBuilderContainer>
  );
};

export default ImageBuilder;
