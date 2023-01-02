/* eslint-disable*/
import React, { useState, useEffect } from "react";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import "./App.css";
import ChatListItem from "./components/ChatListItem";
import ChatIntro from "./components/ChatIntro";
import ChatWindow from "./components/ChatWindow";

export default () => {
  const [chatlist, setChatList] = useState([
    {
      chatId: 1,
      title: "Misael Lima",
      image:
        "https://scontent.fjdo10-2.fna.fbcdn.net/v/t31.18172-8/19250711_1337165323063391_4292727543438955280_o.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHPMxMOsg9sh38dNHZNeFatq7O-O3w7Rz2rs747fDtHPYFm8_xPbTBNAawJ5t5btd2tw7Kylafu1rKetK6EKmp1&_nc_ohc=68LieUhrUpAAX8qdH9C&_nc_ht=scontent.fjdo10-2.fna&oh=00_AfCMiOwSidnBdCElwanXRVdmuyBzJdrqQT1sDWzVzl0xCw&oe=63DA5720",
      text: "Tô com fome",
    },
    {
      chatId: 2,
      title: "Kelvia Vieira",
      image:
        "https://scontent.fjdo10-2.fna.fbcdn.net/v/t1.6435-9/78685941_1855758057889308_6847625492846084096_n.jpg?stp=dst-jpg_s206x206&_nc_cat=109&ccb=1-7&_nc_sid=da31f3&_nc_eui2=AeFtDJpQ4w7_B6VSZr8z1Fr_dSHUiz6kUSJ1IdSLPqRRIlgdjdRshxn2Dbmw3uWaTYng20kp06vplfuaRDSNgkLP&_nc_ohc=cvw_BzsUCSAAX-yxwog&_nc_ht=scontent.fjdo10-2.fna&oh=00_AfAIoZdcD6Ryns7XQWbrLER_bbmzwJRIYjO_361mQ5-owQ&oe=63DA4CA5",
      text: "abre o portão",
    },
    {
      chatId: 3,
      title: "Suzy Nogueira",
      image:
        "https://scontent.fjdo10-1.fna.fbcdn.net/v/t1.6435-9/120175558_2196038973874342_8891923842975168905_n.jpg?stp=dst-jpg_p206x206&_nc_cat=100&ccb=1-7&_nc_sid=da31f3&_nc_eui2=AeGTLsd_jZUFOz8KvHPsEEixQMbZi9Oezo5AxtmL057Ojv08o3gL9TCVbhZfbibrQrK4Ms07_1S2POwD29_9l-cY&_nc_ohc=KLm3ajH6PekAX-Izzb9&_nc_ht=scontent.fjdo10-1.fna&oh=00_AfBgFnNP4EaE4SGPDtEehZzNEcRmuGj2MROW2sFiGkkmnw&oe=63DA4AB2",
      text: "tô grávida",
    },
    {
      chatId: 4,
      title: "Erineide Vieira",
      image:
        "https://scontent.fjdo10-1.fna.fbcdn.net/v/t1.18169-9/28056766_359338741201356_221637739726068158_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGvbc2Whuad0HPHmzab5TamgFV3Q3IhrnCAVXdDciGucDXmnDttpjDFJKbcaGxO-3zCDEm7veFeqdY1tIcwSdyo&_nc_ohc=QxCc86hWd4kAX_OMA4h&tn=wW__BjktewGuyY4c&_nc_ht=scontent.fjdo10-1.fna&oh=00_AfChoIBHBrhidv1lq0GAkhTe4ObUP0cHr2HdDeGHWAFJjw&oe=63DA49E7",
      text: "vem tocar o suco verde",
    },
  ]);
  const [activeChat, setActiveChat] = useState({});
  return (
    <div className="app-window">
      <div className="sidebar">
        <header>
          <img
            className="header--avatar"
            src="https://scontent.fjdo10-2.fna.fbcdn.net/v/t1.6435-9/127181913_1433479803510591_8842082923057105892_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=7tCGA1WLjD0AX-ZMA1Z&_nc_ht=scontent.fjdo10-2.fna&oh=00_AfBXcc7UXH6uWEBYy23yosL3kFeyCmEfjuzCBgwhqeze5Q&oe=63D68917"
            alt=""
          />

          <div className="header--buttons"></div>
          <div className="header--btn">
            <DonutLargeIcon style={{ color: "#919191" }} />
          </div>
          <div className="header--btn">
            <ChatIcon style={{ color: "#919191" }} />
          </div>
          <div className="header--btn">
            <MoreVertIcon style={{ color: "#919191" }} />
          </div>
        </header>
        <div className="search">
          <div className="search--input">
            <SearchIcon fontSize="small" style={{ color: "#919191" }} />
            <input
              type="search"
              placeholder="Procurar ou começar uma nova conversa"
            />
          </div>
        </div>
        <div className="chatlist">
          {chatlist.map((item, key) => (
            <ChatListItem
              key={key}
              data={item}
              active={activeChat.chatId === chatlist[key].chatId}
              onClick={() => setActiveChat(chatlist[key])}
            />
          ))}
        </div>
      </div>
      <div className="contentarea">
        {activeChat.chatId !== undefined && <ChatWindow />}
        {activeChat.chatId === undefined && <ChatIntro />}
      </div>
    </div>
  );
};
