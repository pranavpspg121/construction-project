import ServiceCard from "../components/ServiceCard";
import {
  FaHome,
  FaBuilding,
  FaIndustry,
  FaTools,
  FaHardHat,
  FaHammer
} from "react-icons/fa";

const Services = () => {

  const services = [
    {
      image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
      icon: <FaHome size={28} />,
      title: "Residential Construction",
      description: "Custom homes and remodeling services.",
      features: [
        "New Home Construction",
        "Renovations",
        "Interior Remodeling"
      ]
    },
    {
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
      icon: <FaBuilding size={28} />,
      title: "Commercial Construction",
      description: "Office buildings and retail spaces.",
      features: [
        "Office Buildings",
        "Retail Spaces",
        "Commercial Complexes"
      ]
    },
    {
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
      icon: <FaIndustry size={28} />,
      title: "Industrial Projects",
      description: "Warehouses and infrastructure projects.",
      features: [
        "Warehouses",
        "Manufacturing Units",
        "Industrial Sheds"
      ]
    },
    {
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952",
      icon: <FaTools size={28} />,
      title: "Renovation & Repair",
      description: "Structural upgrades and repairs.",
      features: [
        "Structural Repairs",
        "Modernization",
        "Code Compliance"
      ]
    },
    {
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
      icon: <FaHardHat size={28} />,
      title: "Project Management",
      description: "Planning and supervision services.",
      features: [
        "Budget Management",
        "Timeline Control",
        "Quality Supervision"
      ]
    },
    {
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
      icon: <FaHammer size={28} />,
      title: "Custom Carpentry",
      description: "Expert carpentry & custom woodwork.",
      features: [
        "Custom Cabinets",
        "Decks & Patios",
        "Wood Interiors"
      ]
    }
  ];

  return (
    <div className="container py-5">

      <div className="text-center mb-5">
        <h1 className="fw-bold">Our Services</h1>
        <p className="text-muted">
          Comprehensive construction solutions tailored to your needs.
        </p>
      </div>

      <div className="row">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>

    </div>
  );
};

export default Services;
