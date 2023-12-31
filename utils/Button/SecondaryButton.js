import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faArrowUpRightFromSquare,
  faLink,
} from "@fortawesome/free-solid-svg-icons";

const SecondaryButton = (props) => {
  const { type, content, targetLink, size, disabled } = props;
  return (
    <Link href={targetLink}>
      <button
        disabled={disabled}
        className={`btn btn-secondary rounded-sm flex flex-row gap-3 items-center justify-between`}
        style={{ fontSize: `${size === "xl" ? "19px" : "17px"}` }}
      >
        {content}
        {type === "external" ? (
          <FontAwesomeIcon
            icon={faArrowUpRightFromSquare}
            size={size === "xl" ? "lg" : "sm"}
          />
        ) : type === "internal" ? (
          <FontAwesomeIcon
            icon={faArrowDown}
            size={size === "xl" ? "lg" : "sm"}
          />
        ) : type === "hyperlink" ? (
          <FontAwesomeIcon icon={faLink} size={size === "xl" ? "lg" : "sm"} />
        ) : (
          <></>
        )}
      </button>
    </Link>
  );
};

export default SecondaryButton;
