import React from "react";
type MapProps = {
  restrauntName: string;
  bookMarkedMaps: string[];
  setBookmarkedMaps: (value: string[]) => void;
};
function Map(props: MapProps) {
  const bookmarkHandler = () => {
    props.setBookmarkedMaps([...props.bookMarkedMaps, props.restrauntName]);
  };

  return (
    <div>
      <iframe
        title={props.restrauntName}
        width="700"
        height="500"
        src={`https://datastudio.google.com/embed/reporting/430242fa-4162-4950-a984-824b3b355b3c/page/dQMwC?params=%7B%22ds2.name2%22:%22${props.restrauntName}%22%7D`}
        allowFullScreen
        sandbox="allow-scripts allow-same-origin"
      ></iframe>
      <button onClick={bookmarkHandler}>Bookmark</button>
      <button>Remove from Bookmarks</button>
    </div>
  );
}
export default Map;