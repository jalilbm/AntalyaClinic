import "./index.css";
import Fade from "react-reveal/Fade";
import StandardCard from "../../../../Components/StandardCard";
import { Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";

import { Link } from "react-router-dom";
import { Button } from "antd";
export default function HomeDoctors() {
	const [doctors, setDoctors] = useState(null);
	const [showAllDoctors, setShowAllDoctors] = useState(false);
	useEffect(() => {
		axios.get("/get/doctors/").then(({ data }) => {
			setDoctors(data);
			// const url =
			// 	"https://antalya-clinic.s3.amazonaws.com/doctors/Feridun%20Elmas/image/ikram.webp";

			// const imageNameDecoded = decodeURIComponent(
			// 	url.split("/").pop().split(".")[0]
			// );

			// console.log(imageNameDecoded);
			// console.log("gfd", data);
		});
	}, []);
	return (
		doctors && (
			<div className="home-doctor">
				<Container>
					<Row className="home-doctor-row">
						<Col md={7}>
							<Fade top delay={1000}>
								<h3
									className="home-doctor-h"
									style={{
										fontSize: "4.5rem",
										// fontFamily: "Oswald",
										fontWeight: "bold",
										textAlign: "left",
									}}
								>
									Наши доктора
								</h3>
							</Fade>
						</Col>
						<Col md={5}>
							<Fade bottom delay={1000}>
								<h4
									style={{
										// fontFamily: "Oswald",
										textAlign: "left",
										fontSize: "1.6rem",
										fontWeight: "bold",
										alignSelf: "flex-start",
									}}
								>
									Наша Философия
								</h4>
								<p className="home-doctor-text-header mb-4">
									Мы не только гордимся квалификацией наших врачей, но и
									уверены, что их заботливое и внимательное отношение к каждому
									пациенту - это неотъемлемая часть нашей философии. Мы
									стремимся предоставить не только медицинскую экспертизу, но и
									поддержку и внимание, чтобы вы чувствовали себя в надежных
									руках.
								</p>
							</Fade>
						</Col>
					</Row>

					<Row className=" card-doctor-home-row center-div px-5">
						{doctors
							.slice(0, showAllDoctors ? doctors.length : 3)
							.map((doctor, i) => (
								<Col lg={4} key={doctor.id} className="center-div mb-2 px-1">
									<div className="card-doctor-home-container w-100">
										<StandardCard
											cardTitleStyle={{
												fontSize: "1.3rem",
												fontWeight: "bold",
												// fontFamily: "Arsenal",
											}}
											height={350}
											width={100}
											cardImage={doctor.image}
											imageBorderRadius="0"
											cardTitle={doctor.name_turkish}
											DoctorRate="ПЛАСТИЧЕСКИЙ ХИРУРГ ВЫСШЕЙ КАТЕГОРИИ"
											link={`/doctor/${doctor.name_english}/`}
											rightGreenBorder={i === 2}
										/>
									</div>
								</Col>
							))}

						{/* <div className="w-100 pb-0">
							<div className="d-flex mt-4 home-doctors-animation-text-container button-text-container">
								<Link
									to="our-doctors"
									style={{ textDecoration: "none", color: "black" }}
								>
									<p className="home-image-animation-text mb-0">ПОДРОБНЕЕ...</p>
								</Link>
								<div className="arrow-container">
									<Button shape="circle" className="circle-button" />
									<div className="button-arrow" />
								</div>
							</div>
						</div> */}
						<Row className="w-100">
							<Col
								md={10}
								style={{ display: "flex" }}
								className="home-doctors-progress-col"
							>
								<Fade top delay={500} cascade>
									<div>
										<h5
											style={{
												fontWeight: "bolder",
												fontSize: "1.8rem",
												textAlign: "left",
											}}
										>
											900+
										</h5>
										<div class="progress-bar">
											<div class="progress" style={{ width: "80%" }}></div>
										</div>
										<h4
											className="mt-1 first-progress-text"
											style={{
												fontSize: "0.7rem",
												textAlign: "left",
												fontWeight: "bolder",
											}}
										>
											Операций
										</h4>
									</div>
									<div className="ms-4">
										<h5
											className="second-progress-text-width"
											style={{
												fontSize: "1.8rem",
												textAlign: "left",
												fontWeight: "bolder",
												width: "120px",
											}}
										>
											550+
										</h5>
										<div class="progress-bar">
											<div class="progress" style={{ width: "80%" }}></div>
										</div>
										<h4
											className="mt-1 second-progress-text"
											style={{
												fontSize: "0.7rem",
												textAlign: "left",
												fontWeight: "bolder",
											}}
										>
											Довольных Клиентов
										</h4>
									</div>
									<div>
										<h5
											style={{
												fontWeight: "bolder",
												fontSize: "1.8rem",
												textAlign: "left",
											}}
										>
											15+
										</h5>

										<div class="progress-bar ">
											<div class="progress" style={{ width: "60%" }}></div>
										</div>
										<h4
											className="mt-1 third-progress-text "
											style={{
												fontSize: "0.7rem",
												textAlign: "left",
												fontWeight: "bolder",
											}}
										>
											Лет в медицине
										</h4>
									</div>
								</Fade>
							</Col>
							<Col md={2}>
								<div className="w-100 contact-form-button-container my-3">
									<Link to="/our-doctors" style={{ textDecoration: "none" }}>
										<Fade top delay={500} cascade>
											<Button className="contact-form-button  py-1 px-5 ">
												Все врачи
											</Button>
										</Fade>
									</Link>
								</div>
							</Col>
						</Row>
					</Row>
				</Container>
			</div>
		)
	);
}
