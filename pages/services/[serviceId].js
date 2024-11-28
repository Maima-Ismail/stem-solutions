import React from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

const serviceDetails = {
    "mobile-app-development": {
      title: "App Development",
      description: "We develop applications for both Android and iOS platforms.",
      img: "/images/services/agency2.png",
      chooseUs: "Why you choose us for the App development?",
      whyChoose:
        "Our team ensures seamless functionality, user-friendly design, and reliable performance across all devices. From concept to launch, we deliver end-to-end app development solutions that drive results.",
      cards: [
        { title: "Zensory", img: "/images/cards/ios.png" },
        { title: "protippa", img: "/images/cards/android.png" },
        { title: "Xperience", img: "/images/cards/cross-platform.png" },
      ],
    },
    "web-development": {
      title: "Web Development",
      description: "We created visually striking and award-recognized websites.",
      img: "/images/services/agency1.png",
      chooseUs: "Why you choose us for the web development?",
      whyChoose:
        "Our team combines cutting-edge technologies with a focus on user experience to build fast, secure, and visually appealing websites. From design to deployment, we ensure your website stands out and performs flawlessly.",
      cards: [
        { title: "CRB Monitor", img: "/images/cards/frontend.png" },
        { title: "CRB Monitor", img: "/images/cards/backend.png" },
        { title: "CRB Monitor", img: "/images/cards/fullstack.png" },
      ],
    },
    "ui-ux-design": {
      title: "UI/UX Design",
      description:
        "We create intuitive, user-friendly designs that captivate and engage users.",
      img: "/images/services/agency3.png",
      chooseUs: "Why you choose us for UI/UX Design",
      whyChoose:
        "We work closely with clients to understand their needs and deliver designs that are both aesthetically pleasing and functional. From wireframing to final design, we ensure every element is optimized for usability and engagement.",
      cards: [
        { title: "Friday", img: "/images/cards/ux-research.png" },
        { title: "Ecobanking", img: "/images/cards/ui-design.png" },
        { title: "Inspect Point", img: "/images/cards/prototyping.png" },
      ],
    },
    "startup-solution": {
      title: "Startup Solution",
      description:
        "Innovative solutions to ignite your startup's growth and success.",
      img: "/images/services/agency7.png",
      chooseUs: "Why you choose us for Custom Software Development",
      whyChoose:
        "Our startup solution service provides innovative tools, expert guidance, and strategic support to help you launch, scale, and thrive. Let’s turn your vision into reality. Together, we’ll turn your ideas into a thriving business.",
      cards: [
        { title: "MVP Development", img: "/images/cards/mvp.png" },
        { title: "Scalability Solutions", img: "/images/cards/scalability.png" },
        {
          title: "Investor Pitch Decks",
          img: "/images/cards/investor-pitch.png",
        },
      ],
    },
    "custom-software-development": {
      title: "Custom Software Development",
      description:
        "We offer tailored software development solutions to meet your unique business needs.",
      img: "/images/services/agency4.png",
      chooseUs: "Why you choose us for Custom Software Development",
      whyChoose:
        "We love to develop software products throughout its full project lifecycle. It involves strategy, planning, prototyping,  development, and support. Working on all stages allows us to achieve outstanding results with our projects",
      cards: [
        { title: "Tough Commerce", img: "/images/cards/automation.png" },
        { title: "Centrefy", img: "/images/cards/erp.png" },
        { title: "VALIS ACAM", img: "/images/cards/crm.png" },
      ],
    },
    marketing: {
      title: "Marketing",
      description:
        "Creating impactful marketing campaigns that elevate your brand and drive business growth.",
      img: "/images/services/agency6.png",
      whyChoose: "We create strategies that boost visibility and growth.",
      cards: [
        {
          title: "Social Media Marketing",
          img: "/images/cards/social-media.png",
        },
        { title: "Email Campaigns", img: "/images/cards/email.png" },
        { title: "PPC Advertising", img: "/images/cards/ppc.png" },
      ],
    },
    seo: {
      title: "SEO",
      description:
        "Boosting your online visibility and driving traffic with expert SEO strategies.",
      img: "/images/services/agency5.png",
      whyChoose: "We improve your search rankings to drive organic traffic.",
      cards: [
        { title: "On-Page SEO", img: "/images/cards/on-page.png" },
        { title: "Off-Page SEO", img: "/images/cards/off-page.png" },
        { title: "Local SEO", img: "/images/cards/local-seo.png" },
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
      {/* Service Header */}
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
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Overlay
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
          <Typography
            variant="h3"
            style={{
              marginBottom: "10px",
              textAlign: "left",
              fontWeight: "bold",
              fontSize: "50px",
              fontFamily: "Roboto, sans-serif",
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

      {/* Why Choose Us */}
      <Container style={{ marginTop: "40px", marginBottom: "20px" }}>
        <Typography
          variant="h4"
          style={{
            textAlign: "left",
            marginBottom: "20px",
            fontFamily: "Roboto, sans-serif",
          }}
        >
          {service.chooseUs}
        </Typography>
        <Typography
          variant="body1"
          style={{
            textAlign: "left",
            marginBottom: "30px",
            fontFamily: "Roboto, sans-serif",
          }}
        >
          {service.whyChoose}
        </Typography>
      </Container>

      {/* Cards Section */}
      <Container >
        <Grid container spacing={4}>
          {service.cards.map((card, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <div>
                <img
                  src={card.img}
                  alt={card.title}
                  style={{ width: "100%", height: "auto", borderRadius: "8px" }}
                />
                <Typography
                  variant="h6"
                  style={{
                    marginTop: "10px",
                    fontFamily: "Roboto, sans-serif",
                  }}
                >
                  {card.title}
                </Typography>
              </div>
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
