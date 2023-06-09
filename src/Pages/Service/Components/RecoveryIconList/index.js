import "./index.css";
import { Container, Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import IconItems from "../IconItems";
import HospitalizationIcon from "../../../../Assets/ServicesIcons/HospitalizationIcon.png";
import PreparationIcon from "../../../../Assets/ServicesIcons/PreparationIcon.png";
import DurationIcon from "../../../../Assets/ServicesIcons/DurationIcon.png";
import AttentionIcon from "../../../../Assets/ServicesIcons/AttentionIcon.png";
import MedicinesIcon from "../../../../Assets/ServicesIcons/MedicinesIcon.png";
import SuturesRemoveIcon from "../../../../Assets/ServicesIcons/SuturesRemoveIcon.png";
export default function RecoveryIconList(props) {
	return (
		<Container>
			<div id={props.id} className="section">
				<div
					className="pb-3"
					style={{
						background: "rgba(255, 255, 255, 0.85)",
						boxShadow:
							"-2px 5px 8px rgba(0, 0, 0, 0.2), 2px 2px 8px rgba(0, 0, 0, 0.2)",
						borderRadius: "10px",
					}}
				>
					<h3
						style={{ fontSize: "calc(1.325rem + .9vw)" }}
						className="mb-5 pt-3 icon-items-list-header"
					>
						ВОССТАНОВЛЕНИЕ
					</h3>
					<div className="mx-5 icon-items-list">
						<Row>
							<Col lg="6" className="my-2 ps-md-2">
								<IconItems
									title="ПЕРИОД ВОССТАНОВЛЕНИЯ"
									description={props.recoveryPeriod}
									icon={DurationIcon}
								/>
							</Col>
							<Col lg="6" className="my-2 ps-md-2">
								<IconItems
									title="ГОСПИТАЛИЗАЦИЯ"
									description={props.hospitalization}
									icon={HospitalizationIcon}
								/>
							</Col>
						</Row>
						<Row>
							<Col lg="6" className="my-2 ps-md-2">
								<IconItems
									title="СНЯТИЕ ШВОВ"
									description={props.stitchesRemovalPeriod}
									icon={SuturesRemoveIcon}
								/>
							</Col>
							<Col lg="6" className="my-2 ps-md-2">
								<IconItems
									title="ПОДГОТОВКА К ОПЕРАЦИИ"
									description={props.numberOfPostSurgeryVisits}
									icon={PreparationIcon}
								/>
							</Col>
						</Row>
						<Row>
							<Col lg="6" className="my-2 ps-md-2">
								<IconItems
									title="ЛЕКАРСТВА"
									description={props.medicines}
									icon={MedicinesIcon}
								/>
							</Col>
							<Col lg="6" className=" my-2">
								<IconItems
									title="ВНИМАНИЕ!!!"
									description={props.attention}
									icon={AttentionIcon}
								/>
							</Col>
						</Row>
					</div>
				</div>
				<div
					className="pb-3"
					style={{
						background: "rgba(1, 97, 69, 0.95)",
						boxShadow:
							" -4px 4px 8px rgba(0, 0, 0, 0.25), 4px 4px 8px rgba(0, 0, 0, 0.2)",
						borderRadius: "10px",
						color: "#FFFFFF",
					}}
				>
					<h4 className="icon-description-header mt-5 pt-2 mb-2">
						ОСОБЕННОСТИ РЕАБИЛИТАЦИИ
					</h4>
					<div
						className="text-under-icon mx-4 "
						dangerouslySetInnerHTML={{ __html: props.description }}
					></div>
				</div>
			</div>
		</Container>
	);
}
