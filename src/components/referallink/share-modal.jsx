import React, { Component } from "react";
import {
  EmailShareButton,
  FacebookShareButton,
  OKShareButton,
  TelegramShareButton,
  TwitterShareButton,
  VKShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TelegramIcon,
  EmailIcon,
  TwitterIcon,
  WhatsappIcon,
  OKIcon,
  VKIcon,
} from "react-share";
class ShareModal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className={this.props.share ? "social-share" : "d-none"}>
        <TelegramShareButton url={"http://app.pcg.uz/referallik?id=123456789"}>
          <TelegramIcon size={30} />
        </TelegramShareButton>
        <FacebookShareButton url={"http://app.pcg.uz/referallik?id=123456789"}>
          <FacebookIcon size={30} />
        </FacebookShareButton>
        <EmailShareButton url={"http://app.pcg.uz/referallik?id=123456789"}>
          <EmailIcon size={30} />
        </EmailShareButton>
        <TwitterShareButton url={"http://app.pcg.uz/referallik?id=123456789"}>
          <TwitterIcon size={30} />
        </TwitterShareButton>
        <WhatsappShareButton url={"http://app.pcg.uz/referallik?id=123456789"}>
          <WhatsappIcon size={30} />
        </WhatsappShareButton>
        <OKShareButton url={"http://app.pcg.uz/referallik?id=123456789"}>
          <OKIcon size={30} />
        </OKShareButton>
        <VKShareButton url={"http://app.pcg.uz/referallik?id=123456789"}>
          <VKIcon size={30} />
        </VKShareButton>
      </div>
    );
  }
}

export default ShareModal;
