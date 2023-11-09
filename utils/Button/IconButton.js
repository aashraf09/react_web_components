import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDownload,
  faShareNodes,
  faEnvelope,
  faPrint,
} from "@fortawesome/free-solid-svg-icons";

const IconButton = (props) => {
  const { iconName, targetLink, disabled } = props;
  // download, message, share, print
  return (
    <Link href={targetLink}>
      <button
        disabled={disabled}
        className={`btn btn-primary rounded-sm flex flex-row gap-3 items-center justify-between`}
      >
        {iconName === "print" ? (
          <FontAwesomeIcon icon={faPrint} size="lg" />
        ) : iconName === "message" ? (
          <FontAwesomeIcon icon={faEnvelope} size="lg" />
        ) : iconName === "share" ? (
          <FontAwesomeIcon icon={faShareNodes} size="lg" />
        ) : iconName === "download" ? (
          <FontAwesomeIcon icon={faDownload} size="lg" />
        ) : (
          <></>
        )}
      </button>
    </Link>
  );
};

export default IconButton;
