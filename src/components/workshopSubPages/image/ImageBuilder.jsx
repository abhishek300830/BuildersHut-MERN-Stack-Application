import React, { useState } from "react";
import AvatarEditor from "react-avatar-editor";
import ImageBuilderContainer from "./imageBuilderStyle";
import Dropzone from "react-dropzone";
import ScrollBar from "./ScrollBar";
import { Button } from "@mui/material";
import RotateLeftIcon from '@mui/icons-material/RotateLeft';
import RotateRightIcon from '@mui/icons-material/RotateRight';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';

const ImageBuilder = () => {
  // dropzone state
  const [image, setImage] = useState({
    link: "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png",
  });
  // handle drop Image
  const handleDropImage = (dropped) => {
    setImage({ link: dropped[0] });
  };

  // state to edit image
  const [rotate, setRotate] = useState(0);
  const [borderRadius, setBorderRadius] = useState(10);
  const [zoom, setZoom] = useState(1.1);
  return (
    <ImageBuilderContainer>
      <div className="left">
        {/* dropzone */}
        <div className="photoView">
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
                  width={450}
                  height={450}
                  border={20}
                  borderRadius={borderRadius}
                  // color={[255, 255, 255, 0.6]} // RGBA
                  color={[0, 0, 0, 0.4]} // RGBA
                  scale={zoom}
                  rotate={rotate}
                />
                <input {...getInputProps()} />
              </div>
            )}
          </Dropzone>
          <h2>Drop Your Image Here</h2>
        </div>
      </div>


      <div className="right">

          <div className="editorContainer">
            <h3>Transform Properties</h3>

            <div className="changeType">
              <div className="typeName">Zoom : </div>
              <div className="typeChange">
                <ScrollBar
                  borderRadius={borderRadius}
                  setBorderRadius={setBorderRadius}
                  isZoom
                  zoom={zoom}
                  setZoom={setZoom}
                />
              </div>
            </div>

            <div className="changeType">
              <div className="typeName">Border Radius : </div>
              <div className="typeChange">
                <ScrollBar
                  borderRadius={borderRadius}
                  setBorderRadius={setBorderRadius}
                  zoom={zoom}
                  setZoom={setZoom}
                />
              </div>
            </div>

            <div className="changeType">
              <div className="typeName">Rotate : </div>
              <div className="typeChange-3">
                <Button
                  color="success"
                  variant="contained"
                  style={{ marginRight: "10px" }}
                  onClick={() => setRotate(rotate - 2)}
                >
                  <RotateLeftIcon/>
                </Button>

                <Button
                  color="success"
                  variant="contained"
                  style={{ marginRight: "10px" }}
                  onClick={() => setRotate(rotate + 2)}
                >
                  <RotateRightIcon/>
                </Button>

                <Button
                  className="button-3"
                  color="error"
                  variant="contained"
                  onClick={() => setRotate(0)}
                >
                  <ChangeCircleIcon/>
                </Button>
              </div>
            </div>
          </div>

      </div>
    </ImageBuilderContainer>
  );
};

export default ImageBuilder;
