export const handleResult = (transcript) => {
  let status = true;
  switch (transcript) {
    case "google":
      window.open("https://google.com");
      break;

    case "youtube":
      window.open("https://youtube.com");
      break;

    case "facebook":
      window.open("https://facebook.com");
      break;

    case "google drive":
      window.open("https://drive.google.com");
      break;

    case "google maps":
    case "bản đồ":
    case "maps":
      window.open("https://maps.google.com");
      break;

    default:
      if (
        transcript.includes("chỉ đường") ||
        transcript.includes("đường tới") ||
        transcript.includes("tới")
      ) {
        const url = `https://www.google.com/maps/search/${transcript
          .replace("chỉ đường", "")
          .replace("tới", "")
          .replace("đường", "")
          .trim()}`;
        window.open(url.trim());
      } else if (
        transcript.includes("bài hát") ||
        transcript.includes("mở bài hát") ||
        transcript.includes("nghe bài hát")
      ) {
        const url = `https://zingmp3.vn/tim-kiem/tat-ca?q=${transcript
          .replace("bài hát", "")
          .replace("mở", "")
          .replace("nghe", "")
          .trim()}`;
        window.open(url.trim());
      } else if (
        transcript.includes("video") ||
        transcript.includes("mở video") ||
        transcript.includes("xem video")
      ) {
        const url = `https://www.youtube.com/results?search_query=${transcript
          .replace("video", "")
          .replace("mở", "")
          .replace("xem", "")
          .trim()}`;

        window.open(url.trim());
      } else {
        status = false;
      }
      break;
  }

  return status;
};
