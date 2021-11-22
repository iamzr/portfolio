import React from "react";

function Background() {
  const colors = [
    "purple",
    "medium-blue",
    "light-blue",
    "red",
    "orange",
    "yellow",
    "cyan",
    "light-green",
    "lime",
    "magenta",
    "lightish-red",
    "pink",
  ];
  return (
    <div className="background">
      {colors.map((color) => {
        return <div key={"color-" + color} class={color}></div>;
      })}
    </div>
  );
}

export default Background;
