import React, { useState } from "react";
import "./NewChat.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default ({ user, chatlist, show, setShow }) => {
  const [list, setList] = useState([
    {
      id: 123,
      avatar:
        "https://scontent.fjdo10-2.fna.fbcdn.net/v/t31.18172-8/19250711_1337165323063391_4292727543438955280_o.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHPMxMOsg9sh38dNHZNeFatq7O-O3w7Rz2rs747fDtHPYFm8_xPbTBNAawJ5t5btd2tw7Kylafu1rKetK6EKmp1&_nc_ohc=68LieUhrUpAAX8qdH9C&_nc_ht=scontent.fjdo10-2.fna&oh=00_AfCMiOwSidnBdCElwanXRVdmuyBzJdrqQT1sDWzVzl0xCw&oe=63DA5720",
      name: "Misael Lima",
    },
    {
      id: 123,
      avatar:
        "https://scontent.fjdo10-2.fna.fbcdn.net/v/t31.18172-8/19250711_1337165323063391_4292727543438955280_o.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHPMxMOsg9sh38dNHZNeFatq7O-O3w7Rz2rs747fDtHPYFm8_xPbTBNAawJ5t5btd2tw7Kylafu1rKetK6EKmp1&_nc_ohc=68LieUhrUpAAX8qdH9C&_nc_ht=scontent.fjdo10-2.fna&oh=00_AfCMiOwSidnBdCElwanXRVdmuyBzJdrqQT1sDWzVzl0xCw&oe=63DA5720",
      name: "Misael Lima",
    },
    {
      id: 123,
      avatar:
        "https://scontent.fjdo10-2.fna.fbcdn.net/v/t31.18172-8/19250711_1337165323063391_4292727543438955280_o.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHPMxMOsg9sh38dNHZNeFatq7O-O3w7Rz2rs747fDtHPYFm8_xPbTBNAawJ5t5btd2tw7Kylafu1rKetK6EKmp1&_nc_ohc=68LieUhrUpAAX8qdH9C&_nc_ht=scontent.fjdo10-2.fna&oh=00_AfCMiOwSidnBdCElwanXRVdmuyBzJdrqQT1sDWzVzl0xCw&oe=63DA5720",
      name: "Misael Lima",
    },
    {
      id: 123,
      avatar:
        "https://scontent.fjdo10-2.fna.fbcdn.net/v/t31.18172-8/19250711_1337165323063391_4292727543438955280_o.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHPMxMOsg9sh38dNHZNeFatq7O-O3w7Rz2rs747fDtHPYFm8_xPbTBNAawJ5t5btd2tw7Kylafu1rKetK6EKmp1&_nc_ohc=68LieUhrUpAAX8qdH9C&_nc_ht=scontent.fjdo10-2.fna&oh=00_AfCMiOwSidnBdCElwanXRVdmuyBzJdrqQT1sDWzVzl0xCw&oe=63DA5720",
      name: "Misael Lima",
    },
  ]);
  const handleClose = () => {
    setShow(false);
  };
  return (
    <div className="newChat" style={{ left: show ? 0 : -415 }}>
      <div className="newChat--head">
        <div onClick={handleClose} className="newChat--backbutton">
          <ArrowBackIcon style={{ color: "#FFFFFF" }} />
        </div>
        <div className="newChat--headtitle">Nova Conversa</div>
      </div>
      <div className="newChat--list">
        {list.map((item, key) => (
          <div className="newChat--item" key={key}>
            <img className="newChat--itemavatar" src={item.avatar} alt="" />
            <div className="newChat--itemname">{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
