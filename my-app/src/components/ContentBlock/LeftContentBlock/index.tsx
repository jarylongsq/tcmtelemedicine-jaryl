import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../../common/SvgIcon";
import { ContentBlockProps } from "../types";
import { Fade } from "react-awesome-reveal";
import {
  LeftContentSection,
  Content,
  ContentWrapper,
  ServiceWrapper,
  MinTitle,
  MinPara,
} from "./styles";

interface FormLinkProps {
  href: string;
  src: string;
}

const LeftContentBlock = ({
  icon,
  title,
  content,
  section,
  link,
  t,
  id,
}: ContentBlockProps) => {
  const FormLink = ({ href, src }: FormLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="175px" height="50px" />
      </a>
    );
  };
  return (
    <LeftContentSection>
      <Fade direction="left">
        <Row justify="space-between" align="middle" id={id}>
          <Col lg={11} md={11} sm={12} xs={24}>
            <SvgIcon src={icon} width="100%" height="100%" />
          </Col>
          <Col lg={11} md={11} sm={11} xs={24}>
            <ContentWrapper>
              <h6>{t(title)}</h6>
              <Content>{t(content)}</Content>
              <ServiceWrapper>
                <Row justify="space-between">
                  {typeof section === "object" &&
                    section.map((item: any, id: number) => {
                      return (
                        <Col key={id} span={11}>
                          {/* <SvgIcon src={item.icon} width="60px" height="60px" /> */}
                          <MinTitle>{t(item.title)}</MinTitle>
                          <MinPara>{t(item.content)}</MinPara>
                        </Col>
                      );
                    })}
                </Row>
              </ServiceWrapper>
              <ServiceWrapper>
                <Row justify="space-between">
                  {typeof link === "object" &&
                    link.map((item: any, id: number) => {
                      return (
                        <FormLink
                          href="https://forms.gle/nH1TDd17gFE1H3RYA"
                          src="try.svg"
                        />
                      );
                    })}
                </Row>
              </ServiceWrapper>     
            </ContentWrapper>
          </Col>
        </Row>
      </Fade>
    </LeftContentSection>
  );
};

export default withTranslation()(LeftContentBlock);
