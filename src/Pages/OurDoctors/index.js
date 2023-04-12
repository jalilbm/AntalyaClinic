import "./index.css";
import TitleCover from "../../Components/TitleCover";
import { ArrowRightOutlined } from "@ant-design/icons";
import DoctorsList from "./Components/DoctorsList";

import Doctor_Cover from "../../Assets/AboutOurDoctors/doctor_cover.png";
export default function OurDoctors() {
	return (
		<div>
			<TitleCover
				title="ВРАЧИ КЛИНИКИ"
				titleAlign="center"
				subtitle=""
				Cover={Doctor_Cover}
			/>
			<DoctorsList />
		</div>
	);
}
