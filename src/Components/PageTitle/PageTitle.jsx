import React from "react";
import { Title } from "../index";
import images from "../../Constants/images";
import "./PageTitle.scss";

const PageTitle = ({ pageTitle, paths }) => {
  console.log(paths);
  return (
    <>
      <Title title={pageTitle} />
      <div className="vg__page-title">
        {paths.map((path, index) => {
          return (
            <>
              <p key={index}>
                <a href={path.src}>{path.name}</a>
              </p>
              {paths.length - 1 !== index && (
                <img src={images.Arrow} alt="Arrow to the Next Page" />
              )}
            </>
          );
        })}
      </div>
    </>
  );
};

export default PageTitle;
