import React, { SetStateAction, useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "react-toastify";
import { Container, Row, Button, Label, Input } from "reactstrap";
import { Copytext } from "utils/Constant";

type propsType = {
  itag: { iTag: string };
  icon: {
    icon?: string;
    feathericon?: string;
  };
};

const IconMarkUp = ({ itag, icon }: propsType) => {
  const featherIcons = require("feather-icons");
  const [open, setOpen] = useState<SetStateAction<boolean>>(false);

  useEffect(() => {
    if (itag.iTag !== "" && icon.icon !== "") {
      setOpen(true);
    }
  }, [itag.iTag, icon.icon]);

  return (
    <div className={`icon-hover-bottom p-fixed fa-fa-icon-show-div ${open ? "d-block" : "d-none"}`}>
      <Container fluid={true}>
        <Row>
          <div className="icon-popup">
            <div className="close-icon" onClick={() => setOpen(false)}>
              <i className="icofont icofont-close"></i>
            </div>
            <div className="icon-first me-2">{icon.feathericon ? <div dangerouslySetInnerHTML={{ __html: featherIcons.icons[icon.feathericon].toSvg(icon.feathericon) }} /> : <i id="icon_main" className={icon.icon}></i>}</div>
            <div className="icon-class">
              <Label className="icon-title">{icon.icon ? "Class" : "iconname"}</Label>
              <span id="fclass1">{icon.icon ? icon.icon : icon.feathericon}</span>
            </div>
            <div className="icon-last">
              <Label className="icon-title">Markup</Label>
              <div>
                <div className="d-flex flex-sm-row flex-column gap-sm-0 gap-2">
                  <Input type="text" className="inp-val form-control m-r-10" defaultValue={itag.iTag} id="input_copy" />
                  <CopyToClipboard text={itag?.iTag}>
                    <Button
                      color="primary"
                      className="notification text-nowrap"
                      onClick={() =>
                        toast.success("Code Copied to clipboard !", {
                          position: toast.POSITION.BOTTOM_RIGHT,
                        })
                      }>
                      {Copytext}
                    </Button>
                  </CopyToClipboard>
                </div>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default IconMarkUp;
