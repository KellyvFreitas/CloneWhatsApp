import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";
import MicIcon from "@mui/icons-material/Mic";
import EmojiPicker from "emoji-picker-react";
import "./ChatWindow.css";

export default () => {
  const [emojiOpen, setEmojiOpen] = useState(false);
  const hadleEmojiClick = () => {};

  return (
    <div className="chatWindow">
      <div className="chatWindow--header">
        <div className="chatWindow--headerinfo">
          <img
            className="chatWindow--avatar"
            src="https://scontent.fjdo10-2.fna.fbcdn.net/v/t31.18172-8/19250711_1337165323063391_4292727543438955280_o.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHPMxMOsg9sh38dNHZNeFatq7O-O3w7Rz2rs747fDtHPYFm8_xPbTBNAawJ5t5btd2tw7Kylafu1rKetK6EKmp1&_nc_ohc=68LieUhrUpAAX8qdH9C&_nc_ht=scontent.fjdo10-2.fna&oh=00_AfCMiOwSidnBdCElwanXRVdmuyBzJdrqQT1sDWzVzl0xCw&oe=63DA5720"
            alt=""
          />
          <div className="chatWindow--name">Misael Lima</div>
        </div>
        <div className="chatWindow--headerbuttons">
          <div className="chatWindow--btn">
            <SearchIcon style={{ color: "#919191" }} />
          </div>
          <div className="chatWindow--btn">
            <AttachFileIcon style={{ color: "#919191" }} />
          </div>
          <div className="chatWindow--btn">
            <MoreVertIcon style={{ color: "#919191" }} />
          </div>
        </div>
      </div>
      <div className="chatWindow--body"></div>

      <div
        className="chatWindow--emojiarea"
        style={{ height: emojiOpen ? "200px" : "0px" }}
      >
        <EmojiPicker
          onEmojiClick={hadleEmojiClick}
          disableSearchBar
          disableSkinTonePicker
        />
      </div>

      <div className="chatWindowc--footer">
        <div className="hatWindow--pre">
          <div className="chatWindow--btn">
            <CloseIcon style={{ color: "#919191" }} />
          </div>

          <div className="chatWindow--btn">
            <InsertEmoticonIcon style={{ color: "#919191" }} />
          </div>
        </div>

        <div className="chatWindow--inputarea">
          <input
            className="chatwindow--input"
            type="text"
            placeholder="Digite uma mensagem"
          />
        </div>

        <div className="chatWindow--pos">
          <div className="chatWindow--btn">
            <SendIcon style={{ color: "#919191" }} />
          </div>
        </div>
      </div>
    </div>
  );
};
