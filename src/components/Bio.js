import React from "react";

const Bio = () => {
  return (
    <div className="site-section-black">
      <div className="section-container">
        <h2>Bio</h2>
        <div className="bio">
          <p>
            Vestibulum nec mauris dui. Morbi nibh neque, tincidunt a nisl ac,
            hendrerit accumsan felis. Maecenas dignissim metus in dui commodo,
            in facilisis dui placerat.
            <br />
            <br />
            Vestibulum nec mauris dui. Morbi nibh neque, tincidunt a nisl ac,
            hendrerit accumsan felis. Maecenas dignissim metus in dui commodo,
            in facilisis dui placerat.Vestibulum nec mauris dui. Morbi nibh
            neque, tincidunt a nisl ac, hendrerit accumsan felis. Maecenas
            <br />
            <br />
            Vestibulum nec mauris dui. Morbi nibh neque, tincidunt a nisl ac,
            hendrerit accumsan felis. Maecenas dignissim metus in dui commodo,
            in facilisis dui placerat.
          </p>
          <img src={require("../images/empty.jpeg")} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Bio;
