import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import "../../Styles/Styles.css";
// import useRef from "use-sound";
import { useRef } from "react";
const Result = ({ data, isDarkMode }) => {
  const audioRef = useRef(null);

  const playSound = () => {
    audioRef.current.play();
  };

  if (!data) {
    return (
      <p className="fw-bold">
        Input a word to initiate the search, as there is currently no available
        data
      </p>
    );
  }

  return (
    <>
      {data.map((item) => (
        <div key={item.id}>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h1>{item.word}</h1>
              <p className="primary-text">{item.phonetic}</p>
            </div>
            <div>
              {item.phonetics.map((phonetic) => (
                <>
                  {phonetic.audio === "" ? null : (
                    <>
                      <FontAwesomeIcon
                        icon={faPlay}
                        onClick={() => playSound(phonetic.audio)}
                      />
                      <audio
                        ref={audioRef}
                        src={phonetic.audio}
                        preload="auto"
                      />
                    </>
                  )}
                </>
              ))}
            </div>
          </div>
          <div>
            {item.meanings.map((meaning) => (
              <>
                <div key={meaning.partOfSpeechS}>
                  <p className="fw-bold fs-4">{meaning.partOfSpeech}</p>
                  <div
                    className={
                      isDarkMode === true
                        ? "border-bottom border-white align-items-center"
                        : "border-bottom border-dark align-items-center"
                    }
                  ></div>
                </div>
                <div>
                  <p className="text-lead">meaning</p>
                  {meaning.definitions.map((definition, index) => (
                    <li key={definition.definition}>{definition.definition}</li>
                  ))}
                </div>
              </>
            ))}
          </div>
          <div>
            <a href={item.sourceUrls}>{item.sourceUrls}</a>
          </div>
        </div>
      ))}
    </>
  );
};

export default Result;
