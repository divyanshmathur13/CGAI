
import React, { useState } from "react";
import "./Display.css";
import FolderIcon from "@mui/icons-material/Folder";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import EastIcon from "@mui/icons-material/East";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const Display = () => {
  const folderData = [
    {
      name: "Folder 1",
      subfolders: [
        {
          name: "Folder 1.1",
          files: ["File 1", "File 2"],
        },
        {
          name: "Folder 1.2",
          files: ["File 3", "File 4"],
        },
      ],
    },
    {
      name: "Folder 2",
      subfolders: [
        {
          name: "Folder 2.1",
          files: ["File 1", "File 2"],
        },
        {
          name: "Folder 2.2",
          files: ["File 3", "File 4"],
        },
      ],
    },

  ];

  const [openFolderIndex, setOpenFolderIndex] = useState(null);
  const [openSubfolderIndex, setOpenSubfolderIndex] = useState(null);
  const [openSubfolders, setOpenSubfolders] = useState({});


  const toggleFolder = (index) => {
    setOpenFolderIndex(openFolderIndex === index ? null : index);
    setOpenSubfolderIndex(null);
    setOpenSubfolders({});
  };

  const toggleSubfolder = (folderIndex, subfolderIndex) => {
    setOpenSubfolderIndex(openSubfolderIndex === subfolderIndex ? null : subfolderIndex);
    setOpenSubfolders((prevState) => ({
      ...prevState,
      [`${folderIndex}-${subfolderIndex}`]: !prevState[`${folderIndex}-${subfolderIndex}`],
    }));
  };

  return (
    <div className="DisplayWrapper">
      <div className="headingWrapper">
        <div className="heading">Secure store</div>{" "}
      </div>

      <div className="ProjectName">
        <div className="dropdown">
          <KeyboardArrowDownIcon />
        </div>
        <div className="directory">
          <div>
            <FolderIcon />
          </div>
          <div style={{ paddingLeft: "5px" }}>Project Name</div>
        </div>
        <div className="processedFiles">Processed 157 of 160 files</div>
      </div>

      <div className="SearchWrapper">
        <div className="searchBar">
          Search File{" "}
          <div className="rightIcon">
            <EastIcon />
          </div>
        </div>
      </div>

   
      <div className="FolderListWrapper">
        <div className="FolderListMain">
          {folderData.map((folder, index) => (
            <div key={index}>
              <div className="FolderListRow" onClick={() => toggleFolder(index)}>
                <div className="folderIcon">
                  <FolderIcon />
                </div>
                <div className="folderName">{folder.name}</div>
                <div className="openIcon">
                  {openFolderIndex === index ? (
                    <KeyboardArrowDownIcon />
                  ) : (
                    <KeyboardArrowRightIcon />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {openFolderIndex !== null && (
          <div className="subFolderList" style={{ paddingLeft: "30px", marginTop: "20px" }}>
            {folderData[openFolderIndex].subfolders.map((subfolder, subIndex) => (
              <div key={subIndex}>
                <div className="FolderListRow" onClick={() => toggleSubfolder(openFolderIndex, subIndex)}>
                  <div className="folderIcon">
                    <FolderIcon />
                  </div>
                  <div className="folderName">{subfolder.name}</div>
                  <div className="openIcon">
                    {openSubfolderIndex === subIndex && openSubfolders[`${openFolderIndex}-${subIndex}`] ? (
                      <KeyboardArrowDownIcon />
                    ) : (
                      <KeyboardArrowRightIcon />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {openFolderIndex !== null && openSubfolderIndex !== null && openSubfolders[`${openFolderIndex}-${openSubfolderIndex}`] && (
          <div className="fileList" style={{ paddingLeft: "40px", marginTop: "10px" }}>
            {folderData[openFolderIndex].subfolders[openSubfolderIndex].files.map((file, fileIndex) => (
              <div className="fileRow" key={fileIndex}>
                <InsertDriveFileIcon />
                <div className="fileName">{file}</div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="ProjectName">
        <div className="dropdown">
          <KeyboardArrowUpIcon />
        </div>
        <div className="directory">
          <div>
            <FolderIcon />
          </div>
          <div style={{ paddingLeft: "5px" }}>Project Name</div>
        </div>
        <div className="processedFiles">Processed 157 of 160 files</div>
      </div>
    </div>
  );
};

export default Display;
