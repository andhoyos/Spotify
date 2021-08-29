import React from "react";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles({
  login: {
    display: "grid",
    placeItems: "center",
    height: "100vh",
    backgroundColor: "black",

    "& img": {
      width: "50%",
    },

    "& a": {
      padding: "20px",
      borderRadius: "99px",
      backgroundColor: "#1db954",
      fontWeight: 600,
      color: "white",
      textDecoration: "none",
    },
  },
});

const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = "http://localhost:3000";
const clientId = "567207e329fe4cc1a423177f1e04aab2";
const scope = [
  "streaming",
  "user-read-email",
  "user-read-private",
  "user-library-read",
  "user-library-modify",
  "user-read-playback-state",
  "user-modify-playback-state",
];

const AUTH_URL = `${authEndpoint}?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&scope=${scope.join(
  "%20"
)}`;
export default function Login() {
  const styles = useStyles();
  return (
    <div className={styles.login}>
      <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="Spotify-logo"
      />
      <a className="btn btn-success btn-lg" href={AUTH_URL}>
        Login Witch Spotify
      </a>
    </div>
  );
}
