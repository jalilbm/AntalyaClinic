import { Col, Container, Row } from "react-bootstrap";
import "./index.css";
import testImage from "../../../../Assets/AboutUs/block1.png";
import { Button } from "antd";
import { Link } from "react-router-dom";

export default function BlogSection() {
	return (
		<Container>
			<div>
				<h1 style={{ fontSize: "4rem", fontWeight: "bolder" }}>БЛОГ</h1>

				<Row className="center-div pb-5 pt-4">
					<Col lg={6}>
						<div
							className="home-blog-grey-container"
							style={{ transform: " rotate(1deg)" }}
						>
							<div>
								<h1
									className="home-blog-header"
									style={{
										fontSize: "1rem",
										fontWeight: "800",
										// maxWidth: "300px",
										textAlign: "left",
									}}
								>
									Варикоз у мужчин: миф или реальность?
								</h1>
								<h2
									className="home-blog-sub-header"
									style={{
										fontSize: "1rem",
										fontWeight: "800",
										textAlign: "left",
										color: "#016245",
									}}
								>
									Читать полностью
								</h2>
							</div>

							<div
								className="home-blog-grey-container-circle-image"
								style={{
									transform: " rotate(-8.28deg)",
									marginRight: " 15px",
									right: "0",
									border: " 7px solid #323334" /* Thicker border */,
									outline: " 3px solid #323334",
									outlineOffset: "6px",
								}}
							>
								<img src={testImage}></img>
							</div>
						</div>
					</Col>
					<Col lg={6}>
						<div
							className="home-blog-grey-container "
							style={{ transform: " rotate(-0.54deg)", marginTop: "3rem" }}
						>
							<h1
								className="home-blog-header-left"
								style={{
									fontSize: "1rem",
									fontWeight: "800",
									textAlign: "left",
								}}
							>
								Варикоз у мужчин: миф или реальность?
							</h1>
							<h2
								className="home-blog-sub-header-left"
								style={{
									fontSize: "1rem",
									fontWeight: "800",
									textAlign: "left",
									color: "#016245",
								}}
							>
								Читать полностью
							</h2>
							<div
								className="home-blog-grey-container-circle-image"
								style={{
									transform: " rotate(6.23deg)",
									border: " 7px solid #016245" /* Thicker border */,
									outline: " 3px solid #016245",
									outlineOffset: "6px",
									left: "0",
									marginLeft: "15px",
								}}
							>
								<img src={testImage}></img>
							</div>
						</div>
					</Col>
				</Row>
				<Row className="center-div my-5">
					<Col lg={6} className="blog-section-last-col">
						<div
							className="home-blog-grey-container"
							style={{ transform: " rotate(-9.68deg)" }}
						>
							<h1
								className="home-blog-header-left"
								style={{
									fontSize: "1rem",
									fontWeight: "800",
									textAlign: "left",
								}}
							>
								Варикоз у мужчин: миф или реальность?
							</h1>
							<h2
								className="home-blog-sub-header-left"
								style={{
									fontSize: "1rem",
									fontWeight: "800",
									textAlign: "left",
									color: "#016245",
								}}
							>
								Читать полностью
							</h2>
							<div
								className="home-blog-grey-container-circle-image"
								style={{
									transform: " rotate(-3.07deg)",
									border: " 7px solid #016245" /* Thicker border */,
									outline: " 3px solid #016245",
									outlineOffset: "6px",
									left: "0",
									marginLeft: "15px",
								}}
							>
								<img src={testImage}></img>
							</div>
						</div>
					</Col>
					<Col lg={6}>
						<div
							className="home-blog-grey-container"
							style={{ transform: " rotate(-4deg)" }}
						>
							<h1
								className="home-blog-header"
								style={{
									fontSize: "1rem",
									fontWeight: "800",
									textAlign: "left",
								}}
							>
								Варикоз у мужчин: миф или реальность?
							</h1>
							<h2
								className="home-blog--sub-header"
								style={{
									fontSize: "1rem",
									fontWeight: "800",
									textAlign: "left",

									color: "#016245",
								}}
							>
								Читать полностью
							</h2>
							<div
								className="home-blog-grey-container-circle-image"
								style={{
									transform: " rotate(-8.3deg)",
									marginRight: " 15px",
									right: "0",
									border: " 7px solid #323334" /* Thicker border */,
									outline: " 3px solid #323334",
									outlineOffset: "6px",
								}}
							>
								<img src={testImage}></img>
							</div>
						</div>
					</Col>
					<div className="w-100 d-flex justify-content-end ">
						<Link style={{ textDecoration: "none" }} to="/blog">
							<Button className="brief-description-button  px-2 py-4 my-4">
								ВСЕ СТАТЬИ
							</Button>
						</Link>
					</div>
				</Row>
			</div>
		</Container>
	);
}