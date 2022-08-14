const express = require("express");
const path = require("path");
const router = express.Router();

const tts = require("@google-cloud/text-to-speech");

const fs = require("fs");
const util = require("util");

const client = new tts.TextToSpeechClient();

async function ttsTranslater(text) {
  const request = {
    input: { text: text },
    voice: { languageCode: "ko-KR", ssmlGender: "NEUTRAL" },
    audioConfig: { audioEncoding: "MP3" },
  };

  const [response] = await client.synthesizeSpeech(request);
  const writeFile = util.promisify(fs.writeFile);
  await writeFile("output.mp3", response.audioContent, "binary");
  console.log("Audio content written to file: output.mp3");
}

router.get("/input/:inputText", (req, res) => {
  let inputText = req.params.inputText;
  ttsTranslater(inputText);
});

router.get("/output", (req, res) => {
  let filePath = path.join(__dirname, "../output.mp3");
  res.sendFile(filePath);
});

module.exports = router;
