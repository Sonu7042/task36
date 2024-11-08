import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const Form = () => {
  const [file, setFile] = useState({file:""});

  const [fetchData, setFetchData] = useState([]);

  const formData = new FormData();
  formData.append("file", file);

  const fetchImgs = async () => {
    const response = await axios.get("http://localhost:9000");
    // console.log(response.data.data);
    setFetchData(response.data.data);
  };

  useEffect(() => {
    fetchImgs();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      return;
    }

    const response = await axios.post("http://localhost:9000/upload", formData);
    setFile({file:""});
    fetchImgs();
  };
  return (
    <>
      <div className="formDiv">
        <form action="" onSubmit={handleSubmit}>
          <input type="file" onChange={(e) => setFile(e.target.files[0])} value={file.file} />
          <button type="submit">Upload</button>
        </form>
      </div>

      <div className="showImgDiv">
        {!fetchData.length ? (
          <p style={{textAlign:"center"}}>loading...</p>
        ) : (
          fetchData.map((img, index) => {
            return (
              <div key={index} className="imgWrapperDiv" name="file">
                <img src={img.path} alt={img.originalname} />
              </div>
            );
          })
        )}
      </div>
    </>
  );
};

export default Form;
