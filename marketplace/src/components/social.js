import { makeStyles } from "@mui/styles";
import { Grid } from "@mui/material";

import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import HomeIcon from '@mui/icons-material/Home';

// if you wanto to add twitter
// import TwitterIcon from '@mui/icons-material/Twitter';

// import { socialMedia } from "data/socialMedia";

const sxclasses = {
  snsIcon: {
    width: "30px",
    height: "30px",
    marginTop: "1%",

    "&:hover": {
      color: "pink",
    },
  },
}

const Social = ({ color }) => {
    const socialMedia = {
        instagram: "https://www.instagram.com/",
        facebook: "https://www.facebook.com/",
        github:
          "https://github.com/houssem-g/",
        homepage: "https://google.com",
        // You can add like this
        // twitter: "https://twitter.com",
    };
  // const classes = useStyles();
  // if you want to add more social medias, add it to here and /data/socialMedia.js.
  // and import the Material Icon, then add the code.
  const { instagram, facebook, github, homepage } = socialMedia;

  // if you add twitter , it will be
  // const { instagram, facebook, github, homepage, twitter } = socialMedia;
  {
    //  and add this code to line 98,
    /* <Grid
        item
        component={"a"}
        target="_blank"
        rel="noreferrer noopener"
        href={twitter}
      >
       <TwitterIcon className={classes.snsIcon} />
    </Grid> */
  }
  return (
    <Grid item container spacing={2} justify="center">
      <Grid
        item
        component={"a"}
        target="_blank"
        rel="noreferrer noopener"
        href={homepage}
      >
        <HomeIcon
          sx={sxclasses}
          color={color ? "primary" : "secondary"}
        />
      </Grid>
      <Grid
        item
        component={"a"}
        target="_blank"
        rel="noreferrer noopener"
        href={facebook}
      >
        <FacebookIcon
          sx={sxclasses}
          color={color ? "primary" : "secondary"}
        />
      </Grid>
      <Grid
        item
        component={"a"}
        target="_blank"
        rel="noreferrer noopener"
        href={instagram}
      >
        <InstagramIcon
          sx={sxclasses}
          color={color ? "primary" : "secondary"}
        />
      </Grid>
      <Grid
        item
        component={"a"}
        target="_blank"
        rel="noreferrer noopener"
        href={github}
      >
        <GitHubIcon
          sx={sxclasses}
          color={color ? "primary" : "secondary"}
        />
      </Grid>
      {/* add social media*/}
    </Grid>
  );
};

export default Social;