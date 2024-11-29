/* eslint-disable quotes */
import React from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { Card, CardContent, CardMedia } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const serviceDetails = {
  "mobile-app-development": {
    title: "App Development",
    description: "We develop applications for both Android and iOS platforms.",
    img: "/service-detail-images/app-banner.png",
    chooseUs: "Why you choose us for the App development?",
    whyChoose:
      "Our team ensures seamless functionality, user-friendly design, and reliable performance across all devices. From concept to launch, we deliver end-to-end app development solutions that drive results.",
    cards: [
      { img: "/service-detail-images/app-card-1.png" },
      { img: "/service-detail-images/app-card-2.png" },
      { img: "/service-detail-images/app-card-3.png" },
    ],
  },
  "web-development": {
    title: "Web Development",
    description: "We created visually striking and award-recognized websites.",
    img: "/service-detail-images/web-banner.png",
    chooseUs: "Why you choose us for the web development?",
    whyChoose:
      "Our team combines cutting-edge technologies with a focus on user experience to build fast, secure, and visually appealing websites. From design to deployment, we ensure your website stands out and performs flawlessly.",
    cards: [
      { img: "/service-detail-images/web-card-1.png" },
      { img: "/service-detail-images/web-card-2.png" },
      { img: "/service-detail-images/web-card-3.png" },
    ],
  },
  "ui-ux-design": {
    title: "UI-UX Design",
    description:
      "We create intuitive, user-friendly designs that captivate and engage users.",
    img: "/service-detail-images/UI-UX-banner.png",
    chooseUs: "Why you choose us for UI/UX Design",
    whyChoose:
      "We work closely with clients to understand their needs and deliver designs that are both aesthetically pleasing and functional. From wireframing to final design, we ensure every element is optimized for usability and engagement.",
    cards: [
      { img: "/service-detail-images/ux-card-1.png" },
      { img: "/service-detail-images/ux-card-2.png" },
      { img: "/service-detail-images/ux-card-3.png" },
    ],
  },
  "startup-solution": {
    title: "Startup Solution",
    description:
      "Innovative solutions to ignite your startup's growth and success.",
    img: "/service-detail-images/startup-banner.png",
    chooseUs: "Why you choose us for Custom Software Development",
    whyChoose:
      "Our startup solution service provides innovative tools, expert guidance, and strategic support to help you launch, scale, and thrive. Let’s turn your vision into reality. Together, we’ll turn your ideas into a thriving business.",
    cards: [
      {
        title: "Engage",
        img: "/service-detail-images/startup-card-1.png",
        description:
          "Discuss your staffing requirements, project goals, and timelines with our expert team",
      },
      {
        title: "Selection",
        img: "/service-detail-images/startup-card-2.png",
        description:
          "We identify and present candidates with the right skills and experience for your project and initiate interview process with your team lead.",
      },
      {
        title: "Onboarding",
        img: "/service-detail-images/startup-card-3.png",
        description:
          "Seamlessly integrate augmented staff into your teams, providing necessary training and support.",
      },
      {
        title: "Execution",
        img: "/service-detail-images/startup-card-4.png",
        description:
          "Collaborate with our augmented team members to achieve project milestones and objectives.",
      },
      {
        title: "Support",
        img: "/service-detail-images/startup-card-5.png",
        description:
          "We provide ongoing HR support and monitoring to ensure project success and client satisfaction.",
      },
    ],
  },
  "custom-software-development": {
    title: "Custom Software Development",
    description:
      "We offer tailored software development solutions to meet your unique business needs.",
    img: "/service-detail-images/custom-software-banner.png",
    chooseUs: "Why you choose us for Custom Software Development",
    whyChoose:
      "We love to develop software products throughout its full project lifecycle. It involves strategy, planning, prototyping,  development, and support. Working on all stages allows us to achieve outstanding results with our projects",
    cards: [
      { img: "/service-detail-images/custom-software-card-1.png" },
      { img: "/service-detail-images/custom-software-card-2.png" },
      { img: "/service-detail-images/custom-software-card-3.png" },
    ],
  },
};

function ServiceDetail() {
  const router = useRouter();
  const { serviceId } = router.query;

  const service = serviceDetails[serviceId];

  if (!service) {
    return (
      <Typography
        variant="h5"
        style={{
          textAlign: "center",
          margin: "20px",
          fontFamily: "Roboto, sans-serif",
        }}
      >
        Service not found
      </Typography>
    );
  }

  return (
    <div>
      <div
        style={{
          position: "relative",
          backgroundImage: `url(${service.img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "70vh",
          color: "#fff",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        ></div>
        <Container
          style={{
            position: "relative",
            zIndex: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: "100%",
            textAlign: "center",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "20px",
              left: "20px",
              cursor: "pointer",
              zIndex: 3,
            }}
            onClick={() => router.push("/")}
          >
            <Button variant="contained"
              color="primary">
              <ArrowBackIcon />
            </Button>
          </div>
          <Typography
            variant="h3"
            style={{
              marginBottom: "10px",
              textAlign: "left",
              fontWeight: "bold",
              fontSize: "50px",
              fontFamily: 'Roboto Condensed',
            }}
            className="responsive-title"
          >
            {service.title}
          </Typography>
          <Typography
            variant="body1"
            style={{
              marginBottom: "20px",
              textAlign: "left",
              fontSize: "18px",
              fontFamily: "Roboto, sans-serif",
            }}
            className="responsive-description"
          >
            {service.description}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            style={{
              backgroundColor: "#2196F3",
              display: "inline",
              alignSelf: "flex-start",
            }}
            onClick={() => router.push("/contact")}
          >
            Contact Us
          </Button>
        </Container>
      </div>

      <Container style={{ marginTop: "40px", marginBottom: "20px" }}>
        <Typography
          variant="h4"
          style={{
            textAlign: "left",
            marginBottom: "20px",
            fontFamily: "'Inter', sans-serif",
            fontWeight: "700",
          }}
        >
          {service.chooseUs}
        </Typography>
        <Typography
          variant="body1"
          style={{
            textAlign: "left",
            marginBottom: "30px",
            fontFamily: "'Inter', sans-serif",
            fontWeight: "400",
            fontSize: "16px",
            lineHeight: "24px",
            color: "#6b6b6b",
          }}
        >
          {service.whyChoose}
        </Typography>
      </Container>


      <Container style={{ marginBottom: "20vh" }}>
        <Grid container spacing={4}>
          {service.cards.map((card, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={serviceId === "startup-solution" ? 2.4 : 4}
              lg={serviceId === "startup-solution" ? 2.4 : 4}
              key={index}
              gap={20}
            >
              {serviceId === "startup-solution" ? (
                <Card
                  style={{
                    maxWidth: 300,
                    margin: "auto",
                    borderRadius: "16px",
                    overflow: "hidden",
                    boxShadow: '0px 0px 5px #DFDFDF',
                    padding: "16px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      height: "100px",
                    }}
                  >
                    <img
                      src={card.img}
                      alt={card.title}
                      style={{
                        width: "60px",
                        height: "60px",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                  <CardContent style={{ textAlign: "center", padding: "0px" }}>
                    <Typography
                      variant="h6"
                      style={{
                        fontWeight: "bold",
                        fontSize: "18px",
                        marginBottom: "8px",
                        textAlign: "left",
                      }}
                    >
                      {card.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      style={{
                        fontSize: "14px",
                        lineHeight: "20px",
                        color: "#6b6b6b",
                        textAlign: "left",
                      }}
                    >
                      {card.description}
                    </Typography>
                  </CardContent>
                </Card>
              ) : (
                <div>
                  <img
                    src={card.img}
                    alt={card.title}
                    style={{
                      width: "100%",
                      height: "auto",
                      borderRadius: "8px",
                    }}
                  />
                </div>
              )}
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Global Styles */}
      <style jsx global>
        {`
          @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap");

          body {
            font-family: "Roboto", sans-serif;
          }

          @media (max-width: 1200px) {
            .responsive-title {
              font-size: 40px;
            }
            .responsive-description {
              font-size: 16px;
            }
          }

          @media (max-width: 768px) {
            .responsive-title {
              font-size: 30px;
            }
            .responsive-description {
              font-size: 14px;
            }
          }

          @media (max-width: 480px) {
            .responsive-title {
              font-size: 24px;
              text-align: center;
            }
            .responsive-description {
              font-size: 12px;
              text-align: center;
            }
            button {
              align-self: center;
            }
          }
        `}
      </style>
    </div>
  );
}

ServiceDetail.propTypes = {
  service: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    img: PropTypes.string,
    cards: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        img: PropTypes.string,
      })
    ),
  }),
};

export default ServiceDetail;
