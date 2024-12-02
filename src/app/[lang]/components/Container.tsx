import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  style?: React.CSSProperties;
}

export default function Container(props: Readonly<ContainerProps>) {
  return (
    <div
        id={props.id}
        style={props.style}
      className={`container p-8 mx-auto xl:px-0 ${
        props.className ? props.className : ""
      }`}>
      {props.children}
    </div>
  );
}

