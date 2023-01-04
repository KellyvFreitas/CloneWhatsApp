import React, { useState, useEffect, useRef } from "react";
import SearchIcon from "@mui/icons-material/Search";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";
import MicIcon from "@mui/icons-material/Mic";
import EmojiPicker from "emoji-picker-react";
import MessageItem from "../components/MessageItem";
import "./ChatWindow.css";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ user }) => {
  const body = useRef();
  let recognition = null;
  let SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  if (SpeechRecognition !== undefined) {
    recognition = new SpeechRecognition();
  }
  const [listening, setListening] = useState(false);
  const [emojiOpen, setEmojiOpen] = useState(false);
  const [text, setText] = useState("");
  const [list, setList] = useState([
    { author: 123, body: "testando se está funcionando" },
    { author: 1234, body: "se estiver funcionando, Deus é mais" },
    { author: 123, body: "Pelo amor de Deus tomara que não dê erro " },
    { author: 123, body: "testando se está funcionando" },
    { author: 1234, body: "se estiver funcionando, Deus é mais" },
    { author: 123, body: "Pelo amor de Deus tomara que não dê erro " },
    { author: 123, body: "testando se está funcionando" },
    { author: 1234, body: "se estiver funcionando, Deus é mais" },
    { author: 123, body: "Pelo amor de Deus tomara que não dê erro " },
    { author: 123, body: "testando se está funcionando" },
    { author: 1234, body: "se estiver funcionando, Deus é mais" },
    { author: 123, body: "Pelo amor de Deus tomara que não dê erro " },
    { author: 123, body: "testando se está funcionando" },
    { author: 1234, body: "se estiver funcionando, Deus é mais" },
    { author: 123, body: "Pelo amor de Deus tomara que não dê erro " },
    { author: 123, body: "testando se está funcionando" },
    { author: 1234, body: "se estiver funcionando, Deus é mais" },
    { author: 123, body: "Pelo amor de Deus tomara que não dê erro " },
    { author: 123, body: "testando se está funcionando" },
    { author: 1234, body: "se estiver funcionando, Deus é mais" },
    { author: 123, body: "Pelo amor de Deus tomara que não dê erro " },
  ]);

  useEffect(() => {
    if (body.current.scrollHeight > body.current.offsetHeight) {
      body.current.scrollTop =
        body.current.scrollHeight - body.current.offsetHeight;
    }
  }, [list]);

  const handleEmojiClick = (e, emojiObject) => {
    setText(text + emojiObject.emoji);
  };

  const handleOpenEmoji = () => {
    setEmojiOpen(true);
  };

  const handleCloseEmoji = () => {
    setEmojiOpen(false);
  };

  const handleMicClick = () => {
    if (recognition !== null) {
      recognition.onstart = () => {
        setListening(true);
      };
      recognition.onend = () => {
        setListening(false);
      };
      recognition.onresult = () => {
        // eslint-disable-next-line no-undef
        setText(e.results[0][0].transcript);
      };
      recognition.start();
    }
  };

  const handleSendClick = () => {};

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
      <div ref={body} className="chatWindow--body">
        {list.map((item, key) => (
          <MessageItem key={key} data={item} user={user} />
        ))}
      </div>

      <div
        className="chatWindow--emojiarea"
        style={{ height: emojiOpen ? "200px" : "0px" }}
      >
        <EmojiPicker
          onEmojiClick={handleEmojiClick}
          disableSearchBar
          disableSkinTonePicker
        />
      </div>

      <div className="chatWindow--footer">
        <div className="chatWindow--pre">
          <div
            className="chatWindow--btn"
            onClick={handleCloseEmoji}
            style={{ width: emojiOpen ? 40 : 0 }}
          >
            <CloseIcon style={{ color: "#919191" }} />
          </div>

          <div className="chatWindow--btn" onClick={handleOpenEmoji}>
            <InsertEmoticonIcon
              style={{ color: emojiOpen ? "#009688" : "#919191" }}
            />
          </div>
        </div>

        <div className="chatWindow--inputarea">
          <input
            className="chatwindow--input"
            type="text"
            placeholder="Digite uma mensagem"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>

        <div className="chatWindow--pos">
          {text === "" && (
            <div onClick={handleMicClick} className="chatWindow--btn">
              <MicIcon style={{ color: listening ? "#126ECE" : "#919191" }} />
            </div>
          )}
          {text !== "" && (
            <div onClick={handleSendClick} className="chatWindow--btn">
              <SendIcon style={{ color: "#919191" }} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
