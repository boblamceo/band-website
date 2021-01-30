import React from "react";
import NewsPost from "./NewsPost";

const LatestNews = () => {
  return (
    <div className="site-section-white">
      <div className="section-container">
        <h2>Latest news</h2>
        <NewsPost
          date="18th August 2020"
          title="WIPPEEEE"
          post="Maecenas eget odio purus. Duis malesuada ullamcorper mi a vulputate. Sed iaculis neque quis massa interdum tempus. Vestibulum nec mauris dui. Morbi nibh neque, tincidunt a nisl ac, hendrerit accumsan felis. Maecenas dignissim metus in dui commodo, in facilisis dui placerat."
          image=""
        />
        <NewsPost
          date="18th August 2020"
          title="BIGGA BANGA"
          post="Vestibulum nec mauris dui. Morbi nibh neque, tincidunt a nisl ac, hendrerit accumsan felis. Maecenas dignissim metus in dui commodo, in facilisis dui placerat."
          image=""
        />
      </div>
    </div>
  );
};

export default LatestNews;
