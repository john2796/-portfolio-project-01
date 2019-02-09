import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";

const CardInfoStyle = styled.div`
  .icons-card-info {
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    a {
      color: #8593a9;
      margin: 10px;
    }
  }
  .title {
    font-size: 2rem;
    br {
    }
    span {
      margin-bottom: 15px;
      font-size: 1.3rem;
    }
  }
  .contact-info {
    font-size: 1.4rem;
    color: #8593a9;
    i {
      margin-right: 10px;
    }
  }
`;

const styles = {
  card: {
    maxWidth: 260
  },
  media: {
    height: 140
  }
};

function CardInfo(props) {
  const { classes } = props;
  return (
    <CardInfoStyle>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://losangeles.wpresidence.net/wp-content/uploads/2014/05/agent2-525x328.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              className="title"
            >
              Maria Barlow <br />
              <span>sales executive</span>
            </Typography>
            <Typography component="div" className="contact-info">
              <p>
                <i className="fa fa-phone" />
                (305) 555-4446
              </p>
              <p>
                <i className="fa fa-print" />
                (305) 555-4446
              </p>
              <p>
                <i className="far fa-envelope" />
                youremails@gmail.com
              </p>
              <p>
                <i className="fab fa-skype" />
                yourskypeid
              </p>
            </Typography>
          </CardContent>
        </CardActionArea>
        <span className="icons-card-info">
          <a href="/">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="/">
            <i className="fab fa-pinterest-p" />
          </a>
          <a href="/">
            <i className="fab fa-twitter" />
          </a>
          <a href="/">
            <i className="fab fa-instagram" />
          </a>
        </span>
      </Card>
    </CardInfoStyle>
  );
}

CardInfo.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CardInfo);
